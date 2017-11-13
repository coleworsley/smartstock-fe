import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';
import { Link } from 'react-router-dom';

class StockPrice extends Component {
  constructor() {
    super();
    this.state = {
      symbol: ''
    }
  }

  renderQuotes() {
    const { quotes } = this.props;
    return quotes.data.map((quote) => {
      return (
        <tr key={quote.symbol}>
          <td>
            <Link to={`/${quote.symbol}`}>{quote.name}</Link>
          </td>
          <td>{quote.lastPrice}</td>
          <td>{quote.netChange}</td>
          <td>{quote.percentChange}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="enter symbol"
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
            {this.renderQuotes()}
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
