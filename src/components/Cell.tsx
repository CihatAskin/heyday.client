import React, { Component } from 'react';

interface CellProps {
  id: string;
}

interface CellState {
  isSelected: boolean;
}

export default class Cell extends Component<CellProps, CellState> {
  constructor(props: CellProps) {
    super(props);

    this.state = { isSelected: false };
  }

  handleClick = (e: any): void => {
    e.target.classList.toggle('active');
    e.target.classList.remove('over');
    this.setState({ isSelected: true });
  };

  handleMouseOver = (e: any): void => {
    e.target.classList.add('over');

  };

  handleMouseLeave = (e: any): void => {
    e.target.classList.remove('over');

  };

  render() {
    return (
      <td
        draggable="false"
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        rowSpan={1}
        colSpan={1}
        key={this.props.id}
      ></td>
    );
  }


}
