import React, { Component } from 'react';
import Table from '../components/Table';
import DateSettings from '../components/DateSettings';
import ActionArea from '../components/ActionArea';
import ScheduleSettings from '../components/ScheduleSettings';
import { ScheduleCreateModel, ScheduleForm } from '../actions/types';

interface CreateScheduleState {
  title: string;
  description: string;
  period: string;
  hours: number;
  minutes: number;
  startDate: Date;
  managerId: string;
  userIds: string[];
  hourKeys: number[];
}

interface CreateScheduleProps {
  currentUserId: string;
}

export default class CreateSchedule extends Component<
  CreateScheduleProps,
  CreateScheduleState
> {
  constructor(props: CreateScheduleProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      period: '00:00',
      hours: 0,
      minutes: 45,
      startDate: new Date(),
      managerId: props.currentUserId,
      userIds: [],
      hourKeys: [],
    };
  }

  changeStartDate = (date: Date): void => {
    this.setState({ startDate: date });
  };

  changeForm = (form: ScheduleForm): void => {
    this.setState({
      title: form.title,
      description: form.description,
      hours: form.hours,
      minutes: form.minutes,
      period: `${form.hours}:${form.minutes}:00`,
    });
  };

  changeParticipants = (users: string[]): void => {
    this.setState({ userIds: [...users] });
  };

  getCreateModel = (): ScheduleCreateModel => {
    return {
      title: this.state.title,
      description: this.state.description,
      period: this.state.period,
      startDate: this.state.startDate,
      managerId: this.state.managerId,
      userIds: this.state.userIds,
      hourKeys: this.state.hourKeys,
    };
  };

  render() {
    return (
      <div className="grid grid-cols-schedule gap-4">
        <div>
          <DateSettings onChange={this.changeStartDate} />
          <Table
            startDate={this.state.startDate}
            selectedHours={this.state.hourKeys}
          />
        </div>
        <div>
          <ScheduleSettings
            title={this.state.title}
            description={this.state.description}
            hours={this.state.hours}
            minutes={this.state.minutes}
            changeForm={this.changeForm}
            userIds={this.state.userIds}
            changeParticipants={this.changeParticipants}
          />
        </div>
        <div className="col-span-2 ">
          <ActionArea getCreateModel={this.getCreateModel} />
        </div>
      </div>
    );
  }
}
