import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda,
EventSettingsModel} from '@syncfusion/ej2-react-schedule';

import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

class App extends React.Component {
  private localData: EventSettingsModel ={
    dataSource: [{
      EndTime : new Date(2020, 10, 11, 6, 30),
      StartTime : new Date(2020,10,11,4,0)
    }]
  };
  private remoteData = new DataManager({
    url :'https://js.syncfusion.com/demos/ejservices/api/Schedule/LocalData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  public render(){
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.Fragment>
     
      <ScheduleComponent currentView='Month' selectedDate={new Date(2020,10,11)}  
      eventSettings= {{dataSource: this.remoteData}}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
    </ScheduleComponent>
    </React.Fragment>
    
  );
  }
}

export default App;
