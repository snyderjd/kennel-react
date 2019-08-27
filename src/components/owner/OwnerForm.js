import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: false
    };

    handleFieldChange = (event) => {
        const updatedState = {};
        updatedState[event.target.id] = event.target.value;
        this.setState(updatedState);
    }

    constructNewOwner = (event) => {
        event.preventDefault();
        if (this.state.ownerName === "" || this.state.phoneNumber === "") {
            window.alert("Please input an owner name and phone number.");
        } else {
            this.setState({loadingStatus: true});
            const owner = {
                ownerName: this.state.ownerName,
                phoneNumber: this.state.phoneNumber
            };

            console.log(this.state);
            console.log(owner);
            
            // Create the owner and redirect user to OwnerList
            OwnerManager.saveOwner(owner).then(() => this.props.history.push("/owners"));
        }
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
                                onChange={this.handleFieldChange}
                                id="ownerName"
                                placeholder="Owner name"
                            />
                            <label htmlFor="name">Owner Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="phoneNumber"
                                placeholder="Phone number"
                            />
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm;