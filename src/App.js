import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './redux/configureStore';
import { JokesPage } from './pages/JokesPage';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <JokesPage />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
