import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="nav-logo">Pinkmap</div>
          <nav>
            <a href="#" className="nav-item">Map</a>
            <a href="#" className="nav-item">Report</a>
            <a href="#" className="nav-item">About</a>
          </nav>
        </header>
        <main>

          <Map />

          <Form />

        </main>
      </div>
    );
  }
}

export default App;
