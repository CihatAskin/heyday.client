import React, { Component } from 'react';
import { MainType } from '../actions/types';
import Row from './Row';

interface BodyProps {
  days: MainType[];
  hours: MainType[];
}

export default class Body extends Component<BodyProps> {
  render() {
    return (
      <tbody>
        {this.props.hours.map((item) => (
          <Row key={item.id} days={this.props.days} hour={item}></Row>
        ))}
      </tbody>
    );
  }
}
