import React, { Component } from 'react';
import Participants from './selects/Participants';
import { ScheduleForm } from '../actions/types';

interface ScheduleSettingsProps {
  title: string;
  description: string;
  hours: number;
  minutes: number;
  changeForm(form: ScheduleForm): void;
  userIds:string[]
  changeParticipants(users:string[]):void;
}

export default class ScheduleSettings extends Component<
  ScheduleSettingsProps,
  ScheduleForm
> {
  constructor(props: ScheduleSettingsProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      hours: this.props.hours,
      minutes: this.props.minutes,
    };
  }

  titleChange = (title: string) => {
    this.setState({ title }, () => this.props.changeForm(this.state));
  };

  descriptionChange = (description: string) => {
    this.setState({ description }, () => this.props.changeForm(this.state));
  };

  minutesChange = (minutes: number) => {
    this.setState({ minutes }, () => this.props.changeForm(this.state));
  };

  hoursChange = (hours: number) => {
    this.setState({ hours }, () => this.props.changeForm(this.state));
  };
 
  // shouldComponentUpdate(nextProps: any, nextState: ScheduleForm) {
  //   console.log(JSON.stringify(this.state));
  //   console.log(JSON.stringify(nextState));
  //   return false;
  // }

  render() {
    return (
      <div className="h-full">
        <form className="bg-sky h-full shadow-md rounded px-8 pt-6 pb-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              required
              id="title"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-minion focus:shadow-outline"
              defaultValue={this.props.title}
              onChange={(e) => this.titleChange(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              maxLength={100}
              rows={10}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-minion focus:shadow-outline"
              defaultValue={this.props.description}
              onChange={(e) => this.descriptionChange(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <span className="block text-gray-700 text-sm font-bold mb-2">
              Duration
            </span>
            <hr className="pt-3" />

            <div className="md:flex md:items-center mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="hours"
                >
                  Hours
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-minion focus:shadow-outline"
                  id="hours"
                  type="number"
                  min={0}
                  max={23}
                  required
                  defaultValue={this.props.hours}
                  onChange={(e) => this.hoursChange(Number(e.target.value))}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="minutes"
                >
                  Minutes
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-minion focus:shadow-outline"
                  id="minutes"
                  type="number"
                  min={0}
                  max={59}        
                  required
                  defaultValue={this.props.minutes}
                  onChange={(e) => this.minutesChange(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          <Participants changeParticipants={this.props.changeParticipants} userIds={this.props.userIds} />
        </form>
      </div>
    );
  }
}
