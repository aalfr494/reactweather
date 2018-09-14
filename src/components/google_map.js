import React, { Component } from 'react';


// will be a dumb component since map does not need redux or state 

class GoogleMap extends Component {

	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {

		//this.refs.map basically. will give access to this html element
		return <div ref="map" />;
	}

}

export default GoogleMap;
			