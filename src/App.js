import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import ScoreTask from './components/ScoreTask';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/create-task' component={CreateTask} />
            <Route exact path='/score-task' component={ScoreTask} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
