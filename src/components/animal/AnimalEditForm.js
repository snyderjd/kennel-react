import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from '../../modules/EmployeeManager';
import "./AnimalForm.css";

class AnimalEditForm extends Component {
    //set the initial state
    state = {
        name: "",
        breed: "",
        loadingStatus: true,
        employeeId: 0,
        employees: []
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedAnimal = {
            id: this.props.match.params.animalId,
            name: this.state.name,
            breed: this.state.breed,
            employeeId: this.state.employeeId
        };

        AnimalManager.update(editedAnimal)
            .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
        AnimalManager.get(this.props.match.params.animalId).then(animal => {
            EmployeeManager.getAll().then(employees => {
                this.setState({
                    name: animal.name,
                    breed: animal.breed,
                    employeeId: this.state.employeeId,
                    employees: employees,
                    loadingStatus: false
                });
            });
        });

    }

    render() {
        return (
            <>
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
                            <label htmlFor="name">Animal name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="breed"
                                value={this.state.breed}
                            />
                            <label htmlFor="breed">Breed</label>
                            <select
                                className="form-control"
                                id="employeeId"
                                value={this.state.employeeId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.employees.map(employee =>
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingAnimal}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default AnimalEditForm