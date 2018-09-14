import axios from 'axios';

const API_KEY = 'aa478ae1b46e14b060bbbfd685e8d3ad';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//those are back ticks not single quotes, this is ES6 special syntax

export const FETCH_WEATHER ='FETCH_WEATHER';


export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	//console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

// sample url for returning xml data 
// http://api.openweathermap.org/data/2.5/forecast?q=Miami,us&mode=xml&appid=aa478ae1b46e14b060bbbfd685e8d3ad