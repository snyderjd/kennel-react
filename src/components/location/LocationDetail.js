import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationDetail extends Component {
    state = {
        id: "",
        address: "",
        city: "",
        stateName: "",
        zip: "",
        loadingStatus: true
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
                zip: location.zip,
                loadingStatus: false
            });
        });
    }

    handleDelete = () => {
        // invoke the delete function in LocationManager and re-direct to LocationList
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId).then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Location:</h3>
                    <p>{this.state.address}</p>
                    <p>{this.state.city}, {this.state.stateName} {this.zip}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>
                        Close Location
                    </button>
                </div>
            </div>
        )
    }
}

export default LocationDetail;
