import React , { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Owner:</h3>
                    <p>Joe Snyder</p>
                </div>
            </div>
        );
    }
}

export default OwnerCard;