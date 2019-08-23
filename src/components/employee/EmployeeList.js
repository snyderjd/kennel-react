import React, { Component } from 'react';
// Import the components we will ned
import EmployeeCard from './EmployeeCard.js';
import EmployeeManager from '../../modules/EmployeeManager.js';

class EmployeeList extends Component {
    // define what this component needs to render
    state = {
        employees: []
    }

    componentDidMount() {
        console.log("EMPLOYEE LIST: ComponentDidMount");
        // getAll from EmployeeManager and hang on to that data; put it in state
        EmployeeManager.getAll()
            .then(employees => {
                this.setState({
                    employees: employees
                });
            });
    }

    render() {
        console.log("EMPLOYEE LIST: Render");
        return (
            <div className="container-cards">
                {this.state.employees.map(employee => 
                    <EmployeeCard key={employee.id} employee={employee} />)}
            </div>
        )
    }
}

export default EmployeeList;
