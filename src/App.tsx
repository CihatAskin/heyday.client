import CreateSchedule from './pages/CreateSchedule';
import ListSchedules from './pages/ListSchedules';
import React from 'react';

function App() {



//currentUserId='48932bc9-52a3-435e-b103-555d4afcddae'
  return (
    <React.Fragment>
      <ListSchedules currentUserId='48932bc9-52a3-435e-b103-555d4afcddae' />     
    </React.Fragment>
  );
}

export default App;
