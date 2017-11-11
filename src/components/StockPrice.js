import React, { Component } from 'react';
import { ALPHAVANTAGE_API_KEY } from '../API_KEYS';

class StockPrice extends Component {
  constructor() {
    super();
    this.state = { data: {},  }
  }

  componentDidMount() {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${ALPHAVANTAGE_API_KEY}`)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error))
  }



  render() {
    const data = this.state.data["Time Series (Daily)"]  || {}
    const keys = Object.keys(data)
    return (
      <div>
        {keys}
      </div>
    )
  }
}

export default StockPrice;
