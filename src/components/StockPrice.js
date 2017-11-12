import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';

class StockPrice extends Component {
  constructor() {
    super();
    this.example = 'example'
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchQuotes('AAPL');
    fetch(`/api/v1/quotes?symbols=${'AAPL'}`)
      .then((res) => {
        return res.json();
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error)
      })



  }


  render() {
    // console.log(this.props)
    return (
      <div>
        test
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
