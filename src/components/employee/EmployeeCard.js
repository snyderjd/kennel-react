import React , { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Employee:</h3>
                    <p>Name: Aaron Rodgers</p>
                    <p>Title: Dog Walker</p>
                    <p>Description: Aaron is a dog walker at our kennel. He makes sure all the dogs get plenty of exercise and attention during their stay.</p>
                </div>
            </div>
        )
    }
}

export default EmployeeCard;