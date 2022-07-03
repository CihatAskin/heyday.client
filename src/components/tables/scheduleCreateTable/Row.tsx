import React, { Component } from 'react';
import { MainType } from '../../../actions/types';
import Cell from './Cell';

interface RowProps {
  days: MainType[];
  hour: MainType;
}

export default class Row extends Component<RowProps> {

  render() {
    return (
      <tr key={this.props.hour.id}>
        {this.props.days.map((item) => (
          <Cell key={`${this.props.hour.order}${item.order}`}
            id={`${this.props.hour.order}${item.order}`}
            title={this.props.hour.name}
          ></Cell>
        ))}
      </tr>
    );
  }
}
