import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeForm extends Component {
    state = {
        name: "",
        loadingStatus: false
    };

    handleFieldChange = (event) => {
        const updatedState = {};
        updatedState[event.target.id] = event.target.value;
        this.setState(updatedState);
    };

    // locacl method for validation, set loadingStatus, create employee object, invoke the EmployeeManager save method and redirect to the full employee list

    addNewEmployee = (event) => {
        event.preventDefault();
        if (this.state.name === "") {
            window.alert("Please input an employee name.");
        } else {
            this.setState({loadingStatus: true});
            const employee = {
                name: this.state.name
            };
            // Create employee and redirect to employee list
            EmployeeManager.saveEmployee(employee).then(() => this.props.history.push("/employees"));
        }
    };

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Employee name"
                            />
                            <label htmlFor="name">Employee Name</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.addNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }

}

export default EmployeeForm;