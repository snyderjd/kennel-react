import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationEditForm extends Component {
    // set the initial state
    state = {
        address: "",
        city: "",
        stateName: "",
        zip: "",
        loadingStatus: true
    };

    handleFieldChange = (event) => {
        const updatedState = {};
        updatedState[event.target.id] = event.target.value;
        this.setState(updatedState);
    }

    updateLocation = (event) => {
        event.preventDefault();
        this.setState({loadingStatus: true});
        const editedLocation = {
            id: this.props.match.params.locationId,
            address: this.state.address,
            city: this.state.city,
            stateName: this.state.stateName,
            zip: this.state.zip
        };

        LocationManager.edit(editedLocation).then(() => this.props.history.push("/locations"));
    }

    componentDidMount() {
        LocationManager.get(this.props.match.params.locationId).then(location => {
            this.setState({
                address: location.address,
                city: location.city,
                stateName: location.stateName,
                zip: location.zip,
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
                                onChange={this.handleFieldChange}
                                id="address"
                                placeholder="Address"
                                value={this.state.address}
                            />
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="city"
                                placeholder="City"
                                value={this.state.city}
                            />
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="stateName"
                                placeholder="State"
                                value={this.state.stateName}
                            />
                            <label htmlFor="stateName">State</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="zip"
                                placeholder="Zip code"
                                value={this.state.zip}
                            />
                            <label htmlFor="zip">Zip Code</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }
}

export default LocationEditForm;



// import React, { Component } from 'react';
// import EmployeeManager from '../../modules/EmployeeManager';

// class EmployeeEditForm extends Component {

//     render() {
//         return (
//             <React.Fragment>
//                 <form>
//                     <fieldset>
//                         <div className="formgrid">
//                             <input
//                                 type="text"
//                                 required
//                                 className="form-control"
//                                 onChange={this.handleFieldChange}
//                                 id="name"
//                                 value={this.state.name}
//                             />
//                             <label htmlFor="name">Employee name</label>
//                         </div>
//                         <div className="alignRight">
//                             <button
//                                 type="button"
//                                 disabled={this.state.loadingStatus}
//                                 onClick={this.updateEmployee}
//                                 className="btn btn-primary"
//                             >Submit</button>
//                         </div>
//                     </fieldset>
//                 </form>
//             </React.Fragment>
//         )
//     }

// }

// export default EmployeeEditForm;