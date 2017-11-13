import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';

class StockPrice extends Component {
  constructor() {
    super();
    this.example = 'example';
    this.state = {
      symbol: 'AAPL'
    }
  }

  render() {
    const quotes = this.props.quotes.data.map(quote => {
      return (
        <tr>
          <td>{quote.name}</td>
          <td>{quote.lastPrice}</td>
          <td>{quote.netChange}</td>
          <td>{quote.percentChange}</td>
        </tr>
      )
    })

    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.symbol}
            onChange={(e) => this.setState({ symbol: e.target.value })}
          />
          <button
            onClick={() => this.props.fetchQuotes(this.state.symbol)}
          >
            Search
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Last Price</th>
              <th>Change</th>
              <th>% Change</th>
            </tr>
          </thead>
          <tbody>
            {quotes}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: (symbols) => dispatch(fetchQuotes(symbols))
  }
}

const mapStateToProps = (state) => {
  const { quotes } = state;
  return {
    quotes,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPrice);
