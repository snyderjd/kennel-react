import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeEditForm extends Component {
    // set the initial state
    state = {
        name: "",
        loadingStatus: true
    };

    handleFieldChange = (event) => {
        const updatedState = {};
        updatedState[event.target.id] = event.target.value;
        this.setState(updatedState);
    }

    updateEmployee = (event) => {
        event.preventDefault();
        this.setState({ loadingStatus: true});
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.name
        };

        EmployeeManager.edit(editedEmployee).then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId).then(employee => {
            this.setState({
                name: employee.name,
                loadingStatus: false
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                value={this.state.name}
                            />
                            <label htmlFor="name">Employee name</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" 
                                disabled={this.state.loadingStatus}
                                onClick={this.updateEmployee}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }
}

export default EmployeeEditForm;