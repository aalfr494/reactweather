import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

	//console.log('Action received', action);

	switch (action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);

			//below is es6 way to do the above, both mean same thing es6 adds new city to top 
			return [ action.payload.data, ...state ];


			//making an array because may have list of multiple cities
			//only payload.data has the info we care about
	}

	return state;
}