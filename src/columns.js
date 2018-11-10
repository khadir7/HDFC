import React from 'react';
import TableComponent from "./components/TableComponent";

const columns = [{
    Header: 'Serial',
    accessor: 's.no',
    Cell: props => <TableComponent value={props.original['s.no']}/>
  },{
    Header: 'amount pledged',
    accessor: 'amt.pledged',
    Cell: props => <TableComponent value={props.original['amt.pledged']}/>
  },
  {
    Header: 'project blurb',
    accessor: 'blurb'
  },
  {
    Header: 'project creator',
    accessor: 'by'
  },
  {
    Header: 'abbreviated country code',
    accessor: 'country'
  },
  {
    Header: 'campaign end time (string "YYYY-MM-DDThh:mm:ss-TZD")',
    accessor: 'end.time',
    Cell: props => <TableComponent value={props.original['end.time']} />
  },
  {
    Header: 'mostly city',
    accessor: 'location'
  },
  {
    Header: 'unit %',
    accessor: 'percentage.funded',
    Cell: props => <TableComponent value={props.original['percentage.funded']} />
  },
  {
    Header: 'total number of backers',
    accessor: 'num.backers',
    Cell: props => <TableComponent value={props.original['num.backers']} />
  },
  {
    Header: 'mostly US states (string of length 2) and others',
    accessor: 'state'
  },
  {
    Header: 'project title',
    accessor: 'title'
  },
  {
    Header: 'type of location',
    accessor: 'type'
  },
  {
    Header: 'project url after domain',
    accessor: 'url'
  },
  {
    Header: 'Currency',
    accessor: 'currency'
  }];

export default columns;