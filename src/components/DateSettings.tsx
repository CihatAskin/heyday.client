import React, { Component } from 'react';
import { ActionTypes } from '../actions/types';

interface DateSettingsProps {
  id: string;
  title: string;
}

interface DateSettingsState {
  week: ActionTypes;
}

export default class DateSettings extends Component<
  DateSettingsProps,
  DateSettingsState
> {
  constructor(props: DateSettingsProps) {
    super(props);

    this.state = { week: ActionTypes.thisWeek };
  }

  handleChange = (e: any): void => {
    console.log('radio ', e.target.value);
    this.setState({ week: e.target.value });
    console.log('radio ', this.state);
  };

  render() {
    return (
      <div className="bg-minion h-11 flex flex-row items-center justify-center gap-x-4">
        <div>
          <input
            type="radio"
            value={ActionTypes.thisWeek}
            id={ActionTypes.thisWeek}
            onChange={(e) => this.handleChange(e)}
            checked={this.state.week === ActionTypes.thisWeek}
            name="week"
            className='mr-2 h-5 w-5 align-sub'
          />
          <label htmlFor={ActionTypes.thisWeek}>{ActionTypes.thisWeek}</label>
        </div>
        <div>
          <input
            type="radio"
            value={ActionTypes.nextWeek}
            id={ActionTypes.nextWeek}
            onChange={(e) => this.handleChange(e)}
            checked={this.state.week === ActionTypes.nextWeek}
            name={ActionTypes.nextWeek}
            className='mr-2 h-5 w-5 align-sub'
          />
          <label htmlFor={ActionTypes.nextWeek}>{ActionTypes.nextWeek}</label>{' '}
        </div>
        <div>
          <input
            type="radio"
            value={ActionTypes.startWeek}
            id={ActionTypes.startWeek}
            onChange={(e) => this.handleChange(e)}
            checked={this.state.week === ActionTypes.startWeek}
            name={ActionTypes.startWeek}
            className='mr-2 h-5 w-5 align-sub'
          />
          <label htmlFor={ActionTypes.startWeek}>{ActionTypes.startWeek}</label>
        </div>
      </div>
    );
  }
}
