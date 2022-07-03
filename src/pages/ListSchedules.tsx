import React, { Component } from 'react';
import Table from '../components/tables/scheduleCreateTable/Table';
import DateSettings from '../components/DateSettings';
import ActionArea from '../components/ActionArea';
import ScheduleSettings from '../components/ScheduleSettings';
import { ScheduleCreateModel, ScheduleForm, ScheduleListData } from '../actions/types';
import { TableContext } from '../contexts/TableContext';
import ListActionArea from '../components/ListActionArea';
import ScheduleListTable from '../components/tables/ScheduleListTable';
import UserConnections from '../components/selects/UserConnections';

interface ListSchedulesState {
  title: string;
}

interface ListSchedulesProps {
  currentUserId: string;
}

export default class ListSchedules extends Component<
  ListSchedulesProps,
  ListSchedulesState
> {
  constructor(props: ListSchedulesProps) {
    super(props);
  

    this.state = {
      title: '',
    };
  }
  data:ScheduleListData[] =[{
    id:"asd",
    title:"qwe",
    status:"123"
  
  }]

  render() {
    return (
      <div className="grid grid-cols-list gap-4 border-solid border-2 border-sky-500">
        <div className="w-1/7">BOŞ</div>
        <div className="col-span-2 ">
          <ListActionArea />
        </div>

        <div className="w-1/7">BOŞ</div>

        <div className="w-1/7">BOŞ</div>

        <div>
          <ScheduleListTable data={this.data} />
        </div>

        <div>
          <UserConnections/>
        </div>

        <div className="w-1/7">BOŞ</div>
      </div>
    );
  }
}
