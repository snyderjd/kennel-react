import React, { Component } from 'react';
// Import the components we will need
import LocationCard from './LocationCard.js';
import LocationManager from '../../modules/LocationManager.js';

class LocationList extends Component {
    state = {
        locations: []
    }

    componentDidMount() {
        console.log("LOCATION LIST: ComponentDidMount");
        // getAll from LocationManager and hang on to that data; put it in state
        LocationManager.getAll().then(locations => {
            this.setState({
                locations: locations
            });
        });
    }

    render() {
        console.log("LOCATION LIST: Render");

        return (
            <div className="container-cards">
                {this.state.locations.map(location => 
                    <LocationCard key={location.id} location={location} />)}
            </div>
        )
    }
}

export default LocationList;

