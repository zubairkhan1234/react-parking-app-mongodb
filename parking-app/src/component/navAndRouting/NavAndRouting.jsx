import React from "react";
import SignUp from '../signup/SignUp'
import Login from '../login/Login'
import ParkingAreas from '../parking/ParkingAreas'
import ParkingSlotsDetail from '../parking/ParkingSlotsDetail'
import ParkingBookingFrom from '../parking/parkingBookingFrom'
import Navigation from './Navigation'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function NavAndRouting() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <ParkingAreas />
                    </Route>
                    <Route path="/parking-slots-detail">
                        <ParkingSlotsDetail />
                    </Route>
                    <Route path="/parking-slots-booking">
                        <ParkingBookingFrom />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

