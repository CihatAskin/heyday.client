import React, { Component } from 'react';
import { MainType } from '../actions/types';

interface HeaderProps {
  days: MainType[];
}


export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <thead>
        <tr>
          {this.props.days.map((item) => (
            <th key={item.order}>{item.name}</th>
          ))}
        </tr>
      </thead>
    );
  }
}
