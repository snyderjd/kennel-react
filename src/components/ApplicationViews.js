import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail';
import LocationDetail from './location/LocationDetail';


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // pass the animalId to the AnimalDetail component
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
                }} />

                <Route exact path="/locations" render={(props) => {
                    return <LocationList />
                }} />

                <Route  path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
                }} />

                <Route path="/employees" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
