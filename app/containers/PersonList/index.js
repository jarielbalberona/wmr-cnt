/* eslint-disable prettier/prettier */
/**
 *
 * PersonList
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTable, useFilters, usePagination } from 'react-table';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';
import FloatingLabel from 'floating-label-react';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { criminal_cases as criminal_cases_list } from 'constants/lists';
import { loadPersonList, deletePerson} from './actions';
import {
  makeSelectPersonList,
  makeSelectList,
  makeSelectPersonLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles.scss';

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
  column: { filterValue, setFilter },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows

  const options = ["Red", "White"]

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
// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnCasesFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const criminal_cases = React.useMemo(() => criminal_cases_list.map(ccase => ccase.value), [id, preFilteredRows]);

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
        {criminal_cases.map((option, i) => (
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
    prepareRow,
    pageOptions,
    page,
    pageCount,
    state: { pageIndex, pageSize },
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
    <>
    <div className="wmr-table-container">
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
    </div>
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
          <div>
            <p>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </p>
          </div>
          <div>
            <p>
              Total: {' '}
              <strong>
                {page.length}
              </strong>{' '}
            </p>
          </div>
        </div>
      </nav>
    </>
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

  const { list } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onLoadPersonList = () => dispatch(loadPersonList());
  const onDeletePerson = id => () => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Delete this record?")) {
      dispatch(deletePerson(id))
    }
  };

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
          {
            Header: 'Criminal Case',
            accessor: 'criminal_cases',
            Filter: SelectColumnCasesFilter,
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
            <Link to={`/admin/person-view/${row.original._id}`} className="button">
              <span className="icon is-small">
                <i className="fas fa-eye"></i>
              </span>
            </Link>
            <Link to={`/admin/person-edit/${row.original._id}`} className="button">
              <span className="icon is-small">
                <i className="fas fa-pen"></i>
              </span>
            </Link>
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
    <section id="PersonList">
      <Helmet>
        <title>PersonList</title>
        <meta name="description" content="Description of PersonList" />
      </Helmet>
      <div className="container">
        <Table columns={columns} data={list ? list.reverse() : []} />
      </div>
    </section>
  );
}

export default PersonList;
