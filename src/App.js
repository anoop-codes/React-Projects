import React from 'react';
import './App.css';
import HomeFromDataTranfare from './components/form-data-tranfare/HomeFormDataTransfer';
import HomeContextUseReducer from './components/context-api/HomeContextUseReducer';
import HomeEventCalls from './components/event-calls/HomeEventCalls';


function App() {


  return (
    <div className="container">
      {/* <HomeFromDataTranfare /> */}
      {/* <HomeContextUseReducer /> */}
      <HomeEventCalls />
    </div>
  );
}

export default App;
