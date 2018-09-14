import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

	renderWeather(cityData) {

		
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273)*1.8 + 32);
		//convert from Kelvin to fahrenheit because nobody uses kelvin
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		//const lon = cityData.city.coord.lon;
		//const lat = cityData.city.coord.lat;
		//can rewrite this with es6 format and condense like
		const { lon, lat } = cityData.city.coord;



		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart data={temps} color="orange" units="F" />
				</td>
				<td>
					<Chart data={pressures} color="blue" units="hPa" />
				</td>	
				<td>
					<Chart data={humidities} color="green" units="%" />
				</td>					
			</tr>
			);
	}


	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°F)</th>
						<th>Pressure (hPa) </th>
						<th>Humidity (%) </th>						
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		);
	}
}

function mapStateToProps({ weather }) {

	return { weather };
}

export default connect(mapStateToProps)(WeatherList);