import React, { Component } from 'react';
import './Form.css';

class App extends Component {
  render() {
    return (
      <form id="report-form">
        <div id="report-form-wrapper">
          <div className="report-form-label">
            <label>Report instance of:</label>
          </div>
          <div className="report-form-input">
            <select>
              <option>
                Creepy photos
              </option>
              <option>
                Verbal harassment
              </option>
              <option>
                Physical harassment
              </option>
              <option>
                Attack
              </option>
            </select>
          </div>

          <div className="report-form-label">
            <label>Between stations:</label>
          </div>
          <div className="report-form-input">
            <select>
              <option>
                Gwanghwamun
              </option>
              <option>
                Hongdae
              </option>
              <option>
                City Hall
              </option>
            </select>
          </div>

          <div className="report-form-label">
            <label>and</label>
          </div>
          <div className="report-form-input">
            <select>
              <option>
                Gwanghwamun
              </option>
              <option>
                Hongdae
              </option>
              <option>
                City Hall
              </option>
            </select>
          </div>

          <div className="report-form-section">
            <button action="submit">Submit report</button>  
          </div>
        </div>
      </form>
    );
  }
}

export default App;
