import React, { Component } from 'react';
import NewSchedule from './buttons/NewSchedule';
import Settings from './buttons/Settings';

export default class ListActionArea extends Component {
  render() {
    return (
      <div className="flex flex-row justify-between">
        <div>
          <NewSchedule />
        </div>
        <div>
          <Settings />
        </div>
      </div>
    );
  }
}
