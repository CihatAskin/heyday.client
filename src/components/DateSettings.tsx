import React, { Component } from 'react';
import { ActionTypes } from '../actions/types';
import { DatePicker } from './DatePicker';

interface DateSettingsProps {
  onChange(date: Date): void;
}

interface DateSettingsState {
  week: ActionTypes;
  startDate: Date;
}

export default class DateSettings extends Component<
  DateSettingsProps,
  DateSettingsState
> {
  constructor(props: DateSettingsProps) {
    super(props);

    this.state = {
      week: ActionTypes.thisWeek,
      startDate: new Date(),
    };
  }

  today: Date = new Date();
  sevenDaysAfter: Date = new Date(this.today.getTime() + 7 * 86400000);

  handleChange = (action: ActionTypes, date: Date): void => {
    this.setState({ week: action, startDate: date }, () =>
      this.props.onChange(date)
    );
  };

  render() {
    return (
      <div className="bg-minion h-11 flex flex-row items-center justify-center gap-x-4 border-solid border-2 border-sky border-b-0">
        <div>
          <input
            type="radio"
            value={ActionTypes[ActionTypes.thisWeek]}
            id={ActionTypes[ActionTypes.thisWeek]}
            onChange={(e) =>
              this.handleChange(
                ActionTypes[e.target.value as keyof typeof ActionTypes],
                this.today
              )
            }
            checked={this.state.week === ActionTypes.thisWeek}
            name="week"
            className="radio-action"
          />
          <label htmlFor={ActionTypes[ActionTypes.thisWeek]}>This Week</label>
        </div>

        <div>
          <input
            type="radio"
            value={ActionTypes[ActionTypes.nextWeek]}
            id={ActionTypes[ActionTypes.nextWeek]}
            onChange={(e) =>
              this.handleChange(
                ActionTypes[e.target.value as keyof typeof ActionTypes],
                this.sevenDaysAfter
              )
            }
            checked={this.state.week === ActionTypes.nextWeek}
            name="week"
            className="radio-action"
          />
          <label htmlFor={ActionTypes[ActionTypes.nextWeek]}>Next Week</label>{' '}
        </div>
        <div>
          <input
            type="radio"
            value={ActionTypes[ActionTypes.startWeek]}
            id={ActionTypes[ActionTypes.startWeek]}
            onChange={(e) =>
              this.handleChange(
                ActionTypes[e.target.value as keyof typeof ActionTypes],
                this.today
              )
            }
            checked={this.state.week === ActionTypes.startWeek}
            name="week"
            className="radio-action"
          />
          <label htmlFor={ActionTypes[ActionTypes.startWeek]}>Start Week</label>
        </div>

        <div>
          <DatePicker
            selected={this.state.startDate}
            onChange={(date: Date) =>
              this.handleChange(ActionTypes.startWeek, date)
            }
            minDate={new Date()}
            className="border-solid border-2 border-sky rounded-md pl-2 w-28"
            dateFormat="yyyy/MM/dd"
          />
        </div>
      </div>
    );
  }
}
