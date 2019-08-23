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

    render() {
        console.log("OWNER LIST: Render");
        return (
            <div className="container-cards">
                {this.state.owners.map(owner => 
                    <OwnerCard key={owner.id} owner={owner} />)}
            </div>
        )
    }
}

export default OwnerList;