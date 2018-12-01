import React, { Component } from 'react';
import './Form.css';

class App extends Component {
  render() {
    return (
      <form id="report-form">
        <div id="report-form-wrapper">
          <div className="report-form-label">
            <label>Report:</label>
          </div>
          <div className="report-form-input">
            <select>
              <option>
                Creepy photo taking
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
            <label>Where?</label>
          </div>
          <div className="report-form-input">
            <div>
              <input type="radio" name="incident-location" checked/>
              <label>In the station</label>
            </div>
            <div>
              <input type="radio" name="incident-location"/>
              <label>On the train</label>
            </div>
          </div>

          <div className="report-form-label">
            <label>On line:</label>
          </div>
          <div className="report-form-input">
            <select>
              <option>
                1
              </option>
              <option>
                2
              </option>
              <option>
                3
              </option>
              <option>
                4
              </option>
              <option>
                5
              </option>
              <option>
                6
              </option>
              <option>
                7
              </option>
              <option>
                8
              </option>
              <option>
                9
              </option>
              <option>
                10
              </option>
              <option>
                11
              </option>
              <option>
                12
              </option>
            </select>
          </div>

          <div className="report-form-label">
            <label>Between station</label>
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
            <button id="report-form-submit" action="submit">Submit report</button>  
          </div>
        </div>
      </form>
    );
  }
}

export default App;
