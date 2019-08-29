import React , { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Employee:</h3>
                    <p>Name: {this.props.employee.name}</p>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit Employee</button>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire Employee</button>
                </div>
            </div>
        )
    }
}

export default EmployeeCard;