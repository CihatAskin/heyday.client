import React, { Component } from 'react'

export default class ScheduleListTable extends Component {
  render() {
    return (
      <table id='list' className='border-collapse border border-slate-400 w-full bg-white text-sm shadow-sm'>
        <thead>
          <tr>
            <th >Title</th>
            <th >Duration</th>
            <th >Participants</th>
            <th >Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Game Night</td>
            <td>15 min</td>
            <td>4/5</td>
            <td>Waiting</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
