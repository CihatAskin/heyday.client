import React, { Component } from 'react';

export default class UserConnections extends Component {
  /**
   *
   */
  constructor({}) {
    super({});
  }
  handleClick = (e: any) => {
    e.target.classList.toggle('active');
  };
  render() {
    return (
      <div>
        <label htmlFor="connections" className="my-8">
          Connections
        </label>
        <ul id="connections">
          <li onClick={(e) => this.handleClick(e)}>Ali Tarık</li>
          <li onClick={(e) => this.handleClick(e)}>Mert Budanık</li>
          <li onClick={(e) => this.handleClick(e)}>Remziye Pırtık</li>
        </ul>
      </div>
    );
  }
}
