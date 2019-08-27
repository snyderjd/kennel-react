import { Route, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
import LocationList from './location/LocationList';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';
import AnimalDetail from './animal/AnimalDetail';
import LocationDetail from './location/LocationDetail';
import AnimalForm from './animal/AnimalForm';
import EmployeeForm from './employee/EmployeeForm';
import OwnerForm from './owner/OwnerForm';
import LocationForm from './location/LocationForm';
import Login from './auth/Login';


class ApplicationViews extends Component {

    // Check if credentials are in sessionStorage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // pass the animalId to the AnimalDetail component
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />

                <Route exact path="/locations" render={(props) => {
                    return <LocationList {...props} />
                }} />

                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props}/>
                }} />

                <Route  path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props}/>
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}/>
                }} />

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props}/>
                }} />

                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}/>
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
