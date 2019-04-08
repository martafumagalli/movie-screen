/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/navbar';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example />
        </header>
        <footer className="foot">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
