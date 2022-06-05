import React, { Component } from 'react'
import Table from '../components/Table';
import DateSettings from '../components/DateSettings';
import ActionArea from '../components/ActionArea';
import ScheduleSettings from '../components/ScheduleSettings';

export default class CreateSchedule extends Component {
  render() {
    return (
      <div className='grid grid-cols-schedule gap-4'>
        <div className='border-4 border-indigo-500'>
        <DateSettings id='asd' title='aaaa'/>
      <Table/>
        </div>
        <div className='border-4 border-indigo-500'>
        <ScheduleSettings/>
    
        </div>
        <div className='col-span-2 border-4 border-indigo-500'>
        <ActionArea/>
        </div>
        </div>
    )
  }
}
