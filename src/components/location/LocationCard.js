import React , { Component } from 'react';

class LocationCard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Location:</h3>
                    <p>300 Locust Street, Nashville, TN 37209</p>
                </div>
            </div>
        )
    }
}

export default LocationCard;