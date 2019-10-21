/* eslint-disable prettier/prettier */
/**
 *
 * PersonList
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTable, useFilters, usePagination } from 'react-table';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';
import FloatingLabel from 'floating-label-react';

import LoadingIndicator from 'components/LoadingIndicator';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { loadPersonList, deletePerson} from './actions';
import {
  makeSelectPersonList,
  makeSelectList,
  makeSelectPersonLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles';

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
  return (
    <div className="inputs">
      <FloatingLabel
        placeholder="Search..."
        type="text"
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
      />
    </div>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const type_options = new Set();
    preFilteredRows.forEach(row => {
      type_options.add(row.values[id]);
    });
    return [...type_options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <div className="select">
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val;

// Our table component

function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) =>
        rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true;
        }),
    }),
    [],
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    pageOptions,
    page,
    pageCount,
    state: [{ pageIndex, pageSize }],
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    usePagination,
  );

  return (
    <div>
      <table
        {...getTableProps()}
        className="table is-striped is-hoverable  is-fullwidth"
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {page.map(
            row =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              ),
          )}
        </tbody>
      </table>
      <nav className="pagination " role="navigation" aria-label="pagination">
        <button
          type="button"
          className="pagination-previous"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          First
        </button>

        <button
          type="button"
          className="pagination-previous"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          type="button"
          className="pagination-next"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          type="button"
          className="pagination-next"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          Last
        </button>
        <div className="pagination-list">
          <div
            className="select"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            <select>
              {[10, 20, 30, 40, 50].map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <p>
              {pageSize >= rows.length
                ? `Showing ${rows.length} of ${rows.length}`
                : `Showing ${pageSize} of ${rows.length}`}
            </p>
          </div>
          <div className="is-flex">
            <p> Go to page: </p>&nbsp;
            <input
              className="input"
              type="number"
              min="1"
              max={pageOptions.length}
              value={pageIndex + 1}
              onChange={e => {
                gotoPage(e.target.value ? Number(e.target.value) - 1 : 0);
              }}
            />
          </div>
          <div className="">
            <p>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

const stateSelector = createStructuredSelector({
  personList: makeSelectPersonList(),
  list: makeSelectList(),
  loading: makeSelectPersonLoading(),
});

function PersonList() {
  useInjectReducer({ key: 'personList', reducer });
  useInjectSaga({ key: 'personList', saga });

  const { list, loading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onLoadPersonList = () => dispatch(loadPersonList());
  const onDeletePerson = id => () => dispatch(deletePerson(id));
  const onPrintPerson = id => () => alert(`todo print with id ${id}`);
  const onDownloadPerson = id => () => alert(`todo download with id ${id}`);

  useEffect(() => {
    onLoadPersonList();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Personal Details',
        columns: [
          {
            Header: 'Alias / Nickname',
            accessor: 'alias_nickname',
            filter: 'fuzzyText',
          },
          {
            Header: 'Full Name',
            accessor: 'full_name',
            filter: 'fuzzyText',
          },
        ],
      },
      {
        Header: 'Group Details',
        columns: [
          {
            Header: 'Name',
            accessor: 'group',
            filter: 'fuzzyText',
          },
          {
            Header: 'Type',
            accessor: 'group_type',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
        ],
      },
      {
        id: 'actions',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: 'Actions',
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div className="table-actions buttons">
            <Link to={`/person-view/${row.original._id}`} className="button">
              <span className="icon is-small">
                <i className="fas fa-eye"></i>
              </span>
            </Link>
            <Link to={`/person-edit/${row.original._id}`} className="button">
              <span className="icon is-small">
                <i className="fas fa-pen"></i>
              </span>
            </Link>
            <button
              type="button"
              onClick={onPrintPerson(row.original._id)}
              className="button"
            >
              <span className="icon is-small">
                <i className="fas fa-print"></i>
              </span>
            </button>
            <button
              type="button"
              onClick={onDownloadPerson(row.original._id)}
              className="button"
            >
              <span className="icon is-small">
                <i className="fas fa-download"></i>
              </span>
            </button>
            <button
              type="button"
              onClick={onDeletePerson(row.original._id)}
              className="button"
            >
              <span className="icon is-small">
                <i className="fas fa-trash"></i>
              </span>
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <article>
      <Helmet>
        <title>PersonList</title>
        <meta name="description" content="Description of PersonList" />
      </Helmet>
      <section id="PersonList">
        <div className="container is-fluid">
          {loading ? (
            <LoadingIndicator />
          ) : (
            <Table columns={columns} data={list} />
          )}
        </div>
      </section>
    </article>
  );
}

export default PersonList;
