import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class LocationCard extends Component {
    render() {
        console.log(this.props.location);
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Location:</h3>
                    <p>{this.props.location.address}</p>
                    <p>{this.props.location.city}, {this.props.location.stateName} {this.props.location.zip}</p>
                    <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/locations/${this.props.location.id}/edit`) }}>Edit Location</button>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove Location</button>
                </div>
            </div>
        )
    }
}

export default LocationCard;
