import React, { Component } from 'react';
import { ListStatus } from '../actions/types';

interface SearchProps {
  titleOnChange(title: string): void;
  statusOnChange(status: ListStatus): void;
}

interface SearchState {
  isSearching: boolean;
  title: string;
}

export default class Search extends Component<SearchProps, SearchState> {
  constructor(prop: SearchProps) {
    super(prop);

    this.state = {
      isSearching: false,
      title: '',
    };
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  handleChange = (e: any) => {
    this.setState({ title: e.target.value });
    if (this.state.isSearching) {
      return;
    }

    this.setState({ isSearching: true });

    setTimeout(() => {
      this.props.titleOnChange(this.state.title);
      this.setState({ isSearching: false });
    }, 700);
  };

  render() {
    return (
      <div className="py-4">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => this.handleChange(e)}
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-minion focus:shadow-outline"
        />
      </div>
    );
  }
}
