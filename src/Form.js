import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  constructor(props){
    super(props);

    this.handleStationCheck = this.handleStationCheck.bind(this);
    this.handleTrainCheck = this.handleTrainCheck.bind(this);

    this.state = {
      checkStation: true,
      checkTrain: false,
      selectedLine: "1"
    }
  }

  createDropdown(arr){
    let options = [];
    arr.forEach(element => {
      options.push(
        <option>{element}</option>
      )
    });
    return (
      <select>
        {options}
      </select>
    )
  }

  handleStationCheck(){
    this.setState({
      checkStation: true,
      checkTrain: false
    })
  }

  handleTrainCheck(){
    this.setState({
      checkStation: false,
      checkTrain: true
    })
  }

  render() {

    const dummyData = {
      lines: [1, 2, 3],
      reportTypes: [
        "Invasive photography",
        "Verbal harassment",
        "Physical harassment",
        "Attack/other violence"
      ],
      stations: {
        "1": ["Jongno 3-ga", "Jegi-dong", "Dongdaemun"],
        "2": ["Hongdae", "Sinchon", "City Hall"],
        "3": ["Anguk", "Ilsan", "Jongno 3-ga"]
      }
    }
    
    const formForStationReport = [
      (<div className="report-form-label">
        <label>At station:</label>
      </div>),
      (<div className="report-form-input">
        {this.createDropdown(dummyData.stations[this.state.selectedLine])}
      </div>)
    ];

    const formForTrainReport = [
      (<div className="report-form-label">
        <label>Between stations:</label>
      </div>),
      (<div className="report-form-input">
        {this.createDropdown(dummyData.stations[this.state.selectedLine])}
      </div>),

      (<div className="report-form-label">
        <label>and</label>
      </div>),
      (<div className="report-form-input">
        {this.createDropdown(dummyData.stations[this.state.selectedLine])}
      </div>)
    ];

    //Set the relevant form parts to render based on checking the 'station' or 'train' radio buttons
    let relevantForm = [
      (<div className="report-form-label"></div>),
      (<div className="report-form-input"></div>)
    ];

    if(this.state.checkStation){
      relevantForm = formForStationReport;
    } else if (this.state.checkTrain){
      relevantForm = formForTrainReport;
    }

    return (
      <form id="report-form">
        <div id="report-form-wrapper">
          <div className="report-form-label">
            <label>Report:</label>
          </div>
          <div className="report-form-input">
            {this.createDropdown(dummyData.reportTypes)}
          </div>

          <div className="report-form-label">
            <label>Where?</label>
          </div>
          <div className="report-form-input">
            <div>
              <input type="radio" name="incident-location"
              onChange={this.handleStationCheck}
              checked={this.state.checkStation}/>
              <label>In the station</label>
            </div>
            <div>
              <input type="radio" name="incident-location"
              onChange={this.handleTrainCheck}
              checked={this.state.checkTrain}/>
              <label>On the train</label>
            </div>
          </div>

          <div className="report-form-label">
            <label>On line:</label>
          </div>
          <div className="report-form-input">
            {this.createDropdown(dummyData.lines)}
          </div>

          {relevantForm}

          <div className="report-form-section">
            <button id="report-form-submit" action="submit">Submit report</button>  
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
