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
import AnimalEditForm from './animal/AnimalEditForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import LocationEditForm from './location/LocationEditForm';
import OwnerEditForm from './owner/OwnerEditForm';
import EmployeeWithAnimals from './employee/EmployeeWithAnimals';

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

                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // pass the animalId to the AnimalDetail component
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />

                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} />
                }} />

                <Route exact path="/locations" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props} />
                    }
                    return <Redirect to="/login" />
                }} />

                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props}/>
                }} />

                <Route exact path="/locations/:locationId(\d+)/edit" render={(props) => {
                    return <LocationEditForm {...props} />
                }} />

                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} />                        
                    }
                    return <Redirect to="/login" />
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}/>
                }} />

                <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                    return <EmployeeWithAnimals {...props} />
                }} />

                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    return <EmployeeEditForm {...props} />
                }} />

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props}/>
                    }
                    return <Redirect to="/login" />
                }} />

                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}/>
                }} />

                <Route path="/owners/:ownerId(\d+)/edit" render={(props) => {
                    return <OwnerEditForm {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
