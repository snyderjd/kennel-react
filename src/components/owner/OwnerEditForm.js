import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerEditForm extends Component {
    // set the initial state
    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: true
    }

    handleFieldChange = (event) => {
        const updatedState = {};
        updatedState[event.target.id] = event.target.value;
        this.setState(updatedState);
    }

    updateOwner = (event) => {
        event.preventDefault();
        this.setState({loadingStatus: true});
        const editedOwner = {
            id: this.props.match.params.animalId,
            ownerName: this.state.ownerName,
            phoneNumber: this.state.phoneNumber
        };

        OwnerManager.edit(editedOwner).then(() => this.props.history.push("/owners"));
    }

    componentDidMount() {
        console.log(this.props.match.params.ownerId);
        OwnerManager.get(this.props.match.params.ownerId).then(owner => {
            console.log(owner);
            this.setState({
                ownerName: owner.ownerName,
                phoneNumber: owner.phoneNumber,
                loadingStatus: false
            });
        });
    }

    render() {
        console.log(this.state);
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
                                 id="ownerName"
                                 value={this.state.ownerName}
                             />
                             <label htmlFor="name">Owner name</label>
                                <input
                                 type="text"
                                 required
                                 className="form-control"
                                 onChange={this.handleFieldChange}
                                 id="phoneNumber"
                                 value={this.state.phoneNumber}
                             />
                          <label htmlFor="name">Phone Number</label>
                        </div>
                        <div className="alignRight">
                            <button
                                 type="button" disabled={this.state.loadingStatus}
                                 onClick={this.updateOwner}
                                 className="btn btn-primary"
                             >Submit</button>
                         </div>
                    </fieldset> 
                </form>
            </React.Fragment>
        )
    }
}

export default OwnerEditForm;