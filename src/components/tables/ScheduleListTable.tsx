import React, { Component } from 'react';
import { ScheduleListData } from '../../actions/types';

interface ScheduleListProps {
  data: ScheduleListData[];
}

export default class ScheduleListTable extends Component<ScheduleListProps> {
  constructor(props: ScheduleListProps) {
    super(props);
  }
  header = [
    {
      Header: 'Column 1',
      accessor: 'col1', // accessor is the "key" in the data
    },
    {
      Header: 'Column 2',
      accessor: 'col2',
    },
    {
      Header: 'Column 3',
      accessor: 'col3',
    },
  ];

  render() {
    return (
     <div></div>
    );
  }
}
