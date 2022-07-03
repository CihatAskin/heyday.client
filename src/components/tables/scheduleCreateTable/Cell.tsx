import React, { Component } from 'react';
import { TableContext } from '../../../contexts/TableContext';
import { ITableContext } from '../../../actions/types';

interface CellProps {
  id: string;
  title: string;
}

interface CellState {
  isSelected: boolean;
}

export default class Cell extends Component<CellProps, CellState> {
  constructor(props: CellProps) {
    super(props);

    this.state = { isSelected: false };
  }

  handleClick = (e: any, data: ITableContext): void => {
    var cell = e.target;
    cell.classList.toggle('active');
    cell.classList.remove('over');
    if (cell.classList.contains('active')) {
      this.setState({ isSelected: true }, () => data.pushHoursKey(cell.id));
    } else {
      this.setState({ isSelected: false }, () => data.popHoursKey(cell.id));
    }
  };

  handleMouseOver = (e: any): void => {
    e.target.classList.add('over');
  };

  handleMouseLeave = (e: any): void => {
    e.target.classList.remove('over');
  };

  render() {
    return (
      <TableContext.Consumer>
        {(contextData) => (
          <td
            draggable="false"
            onClick={(e) => this.handleClick(e, contextData)}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
            rowSpan={1}
            colSpan={1}
            key={this.props.id}
            id={this.props.id}
          >
            {this.props.title}
          </td>
        )}
      </TableContext.Consumer>
    );
  }
}
