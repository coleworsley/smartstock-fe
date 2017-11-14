import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailView extends Component {



  render() {
    return (
      <div>
        this is the detail view
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    null: null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
