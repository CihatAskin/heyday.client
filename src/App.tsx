import Table from './components/Table';
import DateSettings from './components/DateSettings';
import ActionArea from './components/ActionArea';
import ScheduleSettings from './components/ScheduleSettings';
import Participants from './components/Participants';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <DateSettings id='asd' title='aaaa'/>
      <Table/>
      <ActionArea/>
      <ScheduleSettings/>
      <Participants/>
      <></>
    </React.Fragment>
  );
}

export default App;
