import React, { Component } from 'react';
import './App.css';

import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        Pinkmap
          <nav>
            <a href="#" className="nav-item">Map</a>
            <a href="#" className="nav-item">Report</a>
            <a href="#" className="nav-item">About</a>
          </nav>
        </header>
        <main>

          <Form />

        </main>
      </div>
    );
  }
}

export default App;
