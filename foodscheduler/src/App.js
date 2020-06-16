import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <img src={logo} lat="logo"></img>
        <h3>안녕!! 나는 오늘의 식단표야 :)</h3>
      </div>
    );
  }
}

export default App;
