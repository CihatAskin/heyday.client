import React, { Component } from 'react';
import Table from '../components/Table';
import DateSettings from '../components/DateSettings';
import ActionArea from '../components/ActionArea';
import ScheduleSettings from '../components/ScheduleSettings';

interface CreateScheduleState {
  startDate: Date;
}

export default class CreateSchedule extends Component<{}, CreateScheduleState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  changeStartDate = (date: Date): void => {
    this.setState({ startDate: date });
  };

  render() {
    return (
      <div className="grid grid-cols-schedule gap-4">
        <div className="border-4 border-indigo-500">
          <DateSettings onChange={this.changeStartDate} />
          <Table startDate={this.state.startDate} />
        </div>
        <div className="border-4 border-indigo-500">
          <ScheduleSettings />
        </div>
        <div className="col-span-2 border-4 border-indigo-500">
          <ActionArea />
        </div>
      </div>
    );
  }
}
