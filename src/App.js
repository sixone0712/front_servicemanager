import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard';
import ButtonSize from './components/Dashboard/Test';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/button" component={ButtonSize} />
      </Switch>
    </div>
  );
}

export default App;
