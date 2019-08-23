import React, { Component } from 'react';
import Animal from './Animal.css';

class AnimalCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dog.svg')} alt="My Dog" />
                    </picture>
                    <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
                    <p>{this.props.animal.breed}</p>
                </div>
            </div>
        );
    }
}

export default AnimalCard;