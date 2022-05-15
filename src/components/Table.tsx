import React, { Component } from 'react';
import Row from './Row';
export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>asd</th>
            <th>asd</th>
            <th>asd</th>
          </tr>
        </thead>
        <tbody>
          <Row id='1'></Row>
          <Row id='2'></Row>
        </tbody>
      </table>
    );
  }
}
