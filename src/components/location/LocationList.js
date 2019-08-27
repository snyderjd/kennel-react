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

    deleteLocation = id => {
        LocationManager.delete(id).then(() => {
            LocationManager.getAll().then(newLocations => {
                this.setState({
                    locations: newLocations
                })
            })
        })
    }

    render() {
        console.log("LOCATION LIST: Render");

        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/locations/new") }}>
                        Add Location
                        </button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(location => 
                        <LocationCard
                            key={location.id}
                            location={location}
                            deleteLocation={this.deleteLocation}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default LocationList;

