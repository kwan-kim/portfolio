import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import TopBar from './components/Nav/TopBar'
import Main from './components/Main/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopBar />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
