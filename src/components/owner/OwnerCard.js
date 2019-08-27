import React , { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Owner:</h3>
                    <p>{this.props.owner.ownerName}</p>
                    <p>Phone: {this.props.owner.phoneNumber}</p>
                    <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove Owner</button>
                </div>
            </div>
        );
    }
}

export default OwnerCard;