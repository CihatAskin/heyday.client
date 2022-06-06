import React, { Component } from 'react';
import Header from './Header';
import { DAYS, HOURS } from '../actions/constants';
import Body from './Body';

interface TableProps {
  startDate: Date;
}

export default class Table extends Component<TableProps> {
  constructor(props: TableProps) {
    super(props);
  }

  render() {
    return (
      <table>
        <Header
          weekDay={this.props.startDate.getDay()}
          monthDay={this.props.startDate.getDate()}
        ></Header>
        <Body days={DAYS} hours={HOURS}></Body>
      </table>
    );
  }
}
