import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import StockPrice from './StockPrice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StockPrice />
      </div>
    );
  }
}

export default App;
