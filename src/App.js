import React, { Component } from 'react';
import { JokesPage } from './pages/JokesPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src="https://www.cngroup.dk/images/cn-group-logo.svg" className="App-logo" alt="logo" /> */}
          <JokesPage />
        </div>
      </div>
    );
  }
}

export default App;
