import React, { Component } from 'react';
import Header from './Header';
import { DAYS, HOURS } from '../actions/constants';
import Body from './Body';

export default class Table extends Component {
  render() {
    return (
      <table>
        <Header days={DAYS}></Header>
        <Body days={DAYS} hours={HOURS}></Body>
      </table>
    );
  }
}
