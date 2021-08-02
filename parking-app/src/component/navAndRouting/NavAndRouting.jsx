import React from "react";
import SignUp from '../signup/SignUp'
import Login from '../login/Login'
import ParkingAreas from '../parking/ParkingAreas'
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
                <ul>
                    <Link to="/">Signup</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </ul>
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
                </Switch>
            </div>
        </Router>
    );
}

