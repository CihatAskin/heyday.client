import React, { Component } from 'react';
import { ListStatus } from '../actions/types';

interface SearchProps {
  titleOnChange(title: string): void;
  statusOnChange(status: ListStatus):void;
}

export default class Search extends Component<SearchProps> {
  render() {
    return (
      <div className='py-4'>
         <label htmlFor='title'>Title</label>
        <input
          type="text"
          value=""
          id='title'
          onChange={(e) =>this.props.titleOnChange(e.target.value)}   
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-minion focus:shadow-outline"
        />       
      </div>
    );
  }
}