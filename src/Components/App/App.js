import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Results from '../Results/Results';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    </div>
  );
}

export default App;
