import React, { Component } from 'react';
import Cell from './Cell';

interface RowProps {
  id: string;
}

export default class Row extends Component<RowProps> {
  constructor(props: RowProps) {
    super(props);
  }

  render() {
    return (
      <tr>
        <Cell id={'1' + this.props.id}></Cell>
        <Cell id={'2' + this.props.id}></Cell>
        <Cell id={'3' + this.props.id}></Cell>
      </tr>
    );
  }
}
