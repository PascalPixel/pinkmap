const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const stationJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'seoul-stations.json'), 'utf8'));

console.log('Data size', stationJson.DATA.length);
const filteredData = stationJson.DATA
		.filter(d => d.station_nm_han !== null)
		.filter(d => d.station_nm_eng !== null);
console.log('Data size with names', filteredData.length);
const noDupData = Object.values(stationJson.DATA.reduce((d, e) => {
	d[e.station_nm_eng] = e;
	return d;
}, {}));
console.log('Data size no dup', noDupData.length);

console.log('Total stations id:', [...(new Set(stationJson.DATA.map(d => d.station_cd)))].length);
console.log('Total stations english names:', [...(new Set(stationJson.DATA.map(d => d.station_nm_eng)))].length);
console.log('Total stations korean names:', [...(new Set(stationJson.DATA.map(d => d.station_nm)))].length);
console.log('Total stations chinese names:', [...(new Set(stationJson.DATA.map(d => d.station_nm_han)))].length);

const mappedData = noDupData.map(({station_nm_han, station_nm_eng, station_nm, line_num}) => {
	return {
		lineNum: line_num,
		en: station_nm_eng,
		kr: station_nm,
		cn: station_nm_han,
	};
});

const groupedByLine = _.groupBy(noDupData, 'line_num');
console.log('All lines:', Object.keys(groupedByLine).map(k => 'Line ' + k).join(', '));
Object.keys(groupedByLine).forEach((lineKey) => {
	console.log('Line ' + lineKey + ', num. of stations', groupedByLine[lineKey].length);
});

const finishData = _.groupBy(mappedData, 'lineNum');

fs.writeFileSync(path.resolve(__dirname, 'seoul-stations-reduced.json'), JSON.stringify(finishData, null, '\t'), 'utf8');
