import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import StudentTable from "./components/dashboard/Table";
import UserProfile from './components/dashboard/UserProfile';
import MainDashboard from "./components/dashboard/MainDashboard";
import Chat from "./components/chat/Chat";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Sidebar from './components/dashboard/Sidebar';


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  if (localStorage.jwtToken !== "undefined") {
    const token = localStorage.jwtToken;

    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwtDecode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Switch> */}

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/chat" component={Chat} />
            <Switch>

              <PrivateRoute exact path="/dashboard">
                <div className="wrapper d-flex align-items-stretch">
                  <Sidebar />
                  <MainDashboard />
                </div>
              </PrivateRoute>
              <PrivateRoute exact path="/dashboard/table">
                <div className="wrapper d-flex align-items-stretch">
                  <Sidebar />
                  <StudentTable />
                </div>
              </PrivateRoute>
              <PrivateRoute exact path="/dashboard/userProfile">
                <div className="wrapper d-flex align-items-stretch">
                  <Sidebar />
                  <UserProfile />
                </div>
              </PrivateRoute>
              </Switch>
                {/* </Switch> */}
          </div>
        </Router>
      </Provider >
    );
  }
}

export default App;
