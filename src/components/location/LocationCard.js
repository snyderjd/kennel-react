import React , { Component } from 'react';

class LocationCard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Location:</h3>
                    <p>{this.props.location.address}</p>
                    <p>{this.props.location.city}, {this.props.location.state} {this.props.location.zip}</p>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove Owner</button>
                </div>
            </div>
        )
    }
}

export default LocationCard;
