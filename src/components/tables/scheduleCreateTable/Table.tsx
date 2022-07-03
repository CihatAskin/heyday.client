import React, { Component } from 'react';
import Header from './Header';
import { DAYS, HOURS } from '../../../actions/constants';
import Body from './Body';

interface TableProps {
  startDate: Date;
}

export default class Table extends Component<TableProps> {

  render() {
    return (
      <table className='shadow appearance-none w-full text-bulgar'>
        <Header
          weekDay={this.props.startDate.getDay()}
          monthDay={this.props.startDate.getDate()}
        ></Header>
        <Body days={DAYS} hours={HOURS}></Body>
      </table>
    );
  }
}
