import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main'
// import Maintenance from './components/maintenance/maintenance.component';

ReactDOM.render(
  <React.StrictMode>
    <Main />
    {/* <Maintenance /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
