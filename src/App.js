import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './redux/configureBetterStore';
import { Jokes } from './containers/Jokes';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Jokes />
        </div>
      </Provider>
    );
  }
}

export default App;
