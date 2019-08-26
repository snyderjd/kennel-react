import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationDetail extends Component {
    state = {
        id: "",
        address: "",
        city: "",
        stateName: "",
        zip: ""
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        // get(id) from LocationManager and hang on to the data; put it into state
        LocationManager.get(this.props.locationId).then(location => {
            this.setState({
                id: location.id,
                address: location.address,
                city: location.city,
                stateName: location.stateName,
                zip: location.zip
            });
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Location:</h3>
                    <p>{this.state.address}</p>
                    <p>{this.state.city}, {this.state.stateName} {this.zip}</p>
                </div>
            </div>
        )
    }
}

export default LocationDetail;

// import React, { Component } from 'react';
// import AnimalManager from '../../modules/AnimalManager';
// import './AnimalDetail.css'