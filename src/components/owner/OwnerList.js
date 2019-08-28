import React, { Component } from 'react';
// Import the component we will need
import OwnerCard from './OwnerCard.js';
import OwnerManager from '../../modules/OwnerManager.js';

class OwnerList extends Component {
    // define what this component needs to render
    state = {
        owners: []
    }

    componentDidMount() {
        console.log("OWNER LIST: ComponentDidMount");
        // getAll from OwnerManager and hang out to that data; put it in state
        OwnerManager.getAll().then(owners => {
            this.setState({
                owners: owners
            });
        });
    }

    deleteOwner = (id) => {
        OwnerManager.delete(id).then(() => {
            OwnerManager.getAll().then(newOwners => {
                this.setState({
                    owners: newOwners
                })
            })
        })
    }

    render() {
        console.log("OWNER LIST: Render");
        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/owners/new") }}>
                        Add Owner
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.owners.map(owner => 
                        <OwnerCard 
                            key={owner.id} 
                            owner={owner}
                            deleteOwner={this.deleteOwner}
                            {...this.props} 
                        />
                    )}
                </div>
                <div className="container-noItems">
                    {this.state.owners.length === 0 ? "There are currently no owners!" : ""}
                </div>
            </React.Fragment>
        )
    }
}

export default OwnerList;