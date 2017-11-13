import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';

class StockPrice extends Component {
  constructor() {
    super();
    this.example = 'example'
  }

  componentDidMount() {
    this.props.fetchQuotes('AAPL');
  }

  componentWillReceiveProps(np) {
    console.log(np)
  }

  render() {
    console.log(this.props.quotes)
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
