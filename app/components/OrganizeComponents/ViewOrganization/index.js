/**
 *
 * Teams
 *
 */

import React, { memo } from 'react';
import OrganizationChart from '@dabeng/react-orgchart';
import '../styles.scss';

function ViewOrganization({ group }) {
  const ds = {
    id: '1',
    name: group.name,
    title: 'general manager',
    children: [
      { id: '2', name: 'Bo Miao', title: 'department manager' },
      {
        id: '3',
        name: 'Su Miao',
        title: 'department manager',
        children: [
          { id: '4', name: 'Tie Hua', title: 'senior engineer' },
          {
            id: '5',
            name: 'Hei Hei',
            title: 'senior engineer',
            children: [
              { id: '6', name: 'Dan Dan', title: 'engineer' },
              { id: '7', name: 'Xiang Xiang', title: 'engineer' },
            ],
          },
          { id: '8', name: 'Pang Pang', title: 'senior engineer' },
        ],
      },
      { id: '9', name: 'Hong Miao', title: 'department manager' },
      {
        id: '10',
        name: 'Chun Miao',
        title: 'department manager',
        children: [{ id: '11', name: 'Yue Yue', title: 'senior engineer' }],
      },
    ],
  };
  return (
    <>
      <div id="ViewOrganization" className="columns">
        <div className="column">View Organization</div>
      </div>
      <div className="columns">
        <div className="column">
          <OrganizationChart datasource={ds} />
        </div>
      </div>
    </>
  );
}

export default memo(ViewOrganization);
