import React, { Component } from 'react';

export default class ActionArea extends Component {
  render() {
    return (
      <div className='bg-minion h-11 flex flex-row items-center justify-end gap-x-8 pr-5'>
        <button className='action-button'>Clear</button>
        <button  className='action-button'>Save</button>
        <button  className='action-button'>Save and New</button>
      </div>
    );
  }
}
