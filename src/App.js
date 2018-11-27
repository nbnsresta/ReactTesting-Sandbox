import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './components/card/CardComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardComponent/>
        </header>
      </div>
    );
  }
}

export default App;
