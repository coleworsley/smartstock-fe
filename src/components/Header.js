import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Smart <span>Stock</span></h1>
      </header>
    )
  }
}

export default Header;
