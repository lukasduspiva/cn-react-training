import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming'

import { configureStore } from './redux/configureStore';
import { JokesPage } from './pages/JokesPage';
import './App.css';

import {
  lightTheme, 
  // darkTheme
} from './theme';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <div className="App">
            <div className="App-header">
              <JokesPage />
            </div>
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
