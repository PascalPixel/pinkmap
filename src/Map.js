import React, { Component } from 'react';
import './Map.css';
import BaseMap from './BaseMap'
import STATIONS from './STATIONS';

class Map extends Component {
  render() {
    return (
      <div className="Map">
        <div className="list">
          {STATIONS.map(station =>
            <div className="station">
              <div>
                {station.lines.map(line => 
                  <span style={{ color: line.stroke }}>◉</span>
                )}
                &nbsp;
                {station.names.map(name => 
                  <span>{name.name}&nbsp;</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="map">
          <BaseMap />
        </div>
      </div>
    );
  }
}

export default Map;
