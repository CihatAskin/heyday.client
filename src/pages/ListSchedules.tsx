import React, { Component } from 'react';
import { ListStatus } from '../actions/types';
import ListActionArea from '../components/ListActionArea';
import Search from '../components/Search';
import UserConnections from '../components/selects/UserConnections';
import ScheduleListTable from '../components/tables/ScheduleListTable';

interface ListSchedulesState {
  title: string;
  paticipantIds: string[];
  status: ListStatus;
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
      paticipantIds: [],
      status: ListStatus.all,
    };
  }

  titleOnChange = (title: string): void => {
    console.log('title', title);
  };

  statusOnChange = (status: ListStatus): void => {
    console.log('status', status);
  };

  render() {
    return (
      <div className="grid grid-cols-list gap-4 border-solid border-2 border-sky-500">
        <div className="col-span-4 h-20">BOŞ</div>

        <div className="w-1/7">BOŞ</div>
        <div className="col-span-2 ">
          <ListActionArea />
        </div>

        <div className="w-1/7">BOŞ</div>

        <div className="w-1/7">BOŞ</div>

        <div >
          <Search
            titleOnChange={this.titleOnChange}
            statusOnChange={this.statusOnChange}
          />
          <ScheduleListTable />
        </div>

        <div>
          <UserConnections />
        </div>

        <div className="w-1/7">BOŞ</div>
        <div className="col-span-4 h-20">BOŞ</div>
      </div>
    );
  }
}
