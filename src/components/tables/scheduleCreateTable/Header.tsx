import React, { Component } from 'react';
import { MainType } from '../../../actions/types';
import { DAYS, HOURS } from '../../../actions/constants';

interface HeaderProps {
  weekDay: number;
  monthDay: number;
}

export default class Header extends Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  sortWeekDay = (): MainType[] => {
    let sortedDays: MainType[] = [];
    let firstDayIndex = this.props.weekDay;

    let i = firstDayIndex;
    do {
      sortedDays.push(DAYS[i]);
      i = (i + 1) % 7;
    } while (i !== firstDayIndex);

    return sortedDays;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.sortWeekDay().map((item) => (
            <th key={item.order}>{item.name}</th>
          ))}
        </tr>
        <tr>
          {DAYS.map((item, index) => (
            <th key={this.props.monthDay + index}>
              {this.props.monthDay + index}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
