import React , { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Employee:</h3>
                    <p>Name: {this.props.employee.name}</p>
                </div>
            </div>
        )
    }
}

export default EmployeeCard;