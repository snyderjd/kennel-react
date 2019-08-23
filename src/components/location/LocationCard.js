import React , { Component } from 'react';

class LocationCard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Location:</h3>
                    <p>{this.props.location.address}</p>
                    <p>{this.props.location.city}, {this.props.location.state} {this.props.location.zip}</p>
                </div>
            </div>
        )
    }
}

export default LocationCard;
