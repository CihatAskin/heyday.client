import React, { Component } from 'react';
import axios from 'axios';
import { ScheduleCreateModel } from '../actions/types';

interface ActionAreaProps {
  getCreateModel(): ScheduleCreateModel;
}

export default class ActionArea extends Component<ActionAreaProps> {
  constructor(props: ActionAreaProps) {
    super(props);
  }
  getValue = (id: string): string => {
    let input = document.querySelector(`#${id}`) as HTMLInputElement;

    if (input == null) {
      return '';
    }

    return input.value;
  };

  getPeriod = (): string => {
    let hour = '00';
    let minute = '00';

    let $hours = document.querySelector(`#hours`) as HTMLInputElement;
    if ($hours != null) {
      hour = $hours.value;
    }

    let $minutes = document.querySelector(`#minutes`) as HTMLInputElement;
    if ($minutes != null) {
      minute = $minutes.value;
    }

    return `${hour}:${minute}`;
  };

  saveClick = (e: any): void => {
    let data = this.props.getCreateModel();

    console.log('save data', JSON.stringify(data));

    axios
      .post('https://localhost:7086/api/Schedule', data)
      .then((response) => {
        console.log('response', { response });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="bg-minion h-14 flex flex-row items-center justify-end gap-x-8 pr-5">
        <button className="action-button">Clear</button>
        <button onClick={this.saveClick} className="action-button">
          Save
        </button>
        <button className="action-button">Save and New</button>
      </div>
    );
  }
}
