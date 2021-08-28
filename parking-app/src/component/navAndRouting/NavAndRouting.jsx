import React from "react";
import SignUp from '../signup/SignUp'
import Login from '../login/Login'
import ParkingAreas from '../parking/ParkingAreas'
import ParkingSlotsDetail from '../parking/ParkingSlotsDetail'
import ParkingBookingFrom from '../parking/parkingBookingFrom'
import Navigation from './Navigation';
import { UseGlobalState } from "../../contexApi/Context";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export default function NavAndRouting() {
    const GlobalState = UseGlobalState()
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    {GlobalState.loginStatus === false ?
                        <>
                            <Route exact path="/">
                                <SignUp />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="*">
                                <Redirect to="/"></Redirect>
                            </Route>
                        </>
                        : null}
                    {GlobalState.loginStatus === true ?
                        <>
                            <Route exact path="/">
                                <ParkingAreas />
                            </Route>
                            <Route path="/parking-slots-detail">
                                <ParkingSlotsDetail />
                            </Route>
                            <Route path="/parking-slots-booking">
                                <ParkingBookingFrom />
                            </Route>

                            <Route path="*">
                                <Redirect to="/"></Redirect>
                            </Route>
                        </>
                        : null}
                </Switch>
            </div>
        </Router>
    );
}

