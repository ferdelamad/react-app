import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}
