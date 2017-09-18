import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {

  render() {

    return (
      <header>
          <img src={logo} className="App-logo img-responsive center-block" alt="logo" width='150px' height='150px'/>
          <br/>
      </header>
    );
  }
}

export default Header;
