import React, { Component } from 'react';
import MainLayout from './Layout/MainLayout';
import Header     from './Layout/Header';

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <MainLayout />
      </div>

    );
  }
}

export default App;
