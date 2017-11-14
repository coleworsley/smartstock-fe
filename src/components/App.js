import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import StockPrice from './StockPrice';
import DetailView from './DetailView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StockPrice />
        <Route path="/detail" component={DetailView}/>
      </div>
    );
  }
}

export default App;
