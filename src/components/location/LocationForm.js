import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationForm extends Component {
    state = {
        address: "",
        city: "",
        stateName: "",
        zip: "",
        loadingStatus: false
    };

    handleFieldChange = (event) => {
        const updatedState = {};
        updatedState[event.target.id] = event.target.value;
        this.setState(updatedState);
    }

    constructNewLocation = (event) => {
        event.preventDefault();
        if (this.state.address === "" || this.state.city === "" || this.state.stateName === "" ||
            this.state.zip === "") {
                window.alert("Please fill out all fields for new location.");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                address: this.state.address,
                city: this.state.city,
                stateName: this.state.stateName,
                zip: this.state.zip
            }

            // Create the location and redirect user to LocationList
            LocationManager.saveLocation(location).then(() => this.props.history.push("/locations"));
        }
    };

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
                            />
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="city"
                                placeholder="City"
                            />
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="stateName"
                                placeholder="State"
                            />
                            <label htmlFor="stateName">State</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="zip"
                                placeholder="Zip code"
                            />
                            <label htmlFor="zip">Zip Code</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }
}

export default LocationForm;