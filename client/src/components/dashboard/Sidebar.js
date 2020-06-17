import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter, useHistory,Redirect } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";

import { logoutUser } from "../../actions/authActions";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { browserHistory } from 'react-router'


import "./style.css";

class Sidebar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        // this.props.history.push('/');
    };
    render() {
        return (
            <>
                <div className="wrapper d-flex align-items-stretch">
                    <nav id="sidebar">
                        <div className="p-4 pt-5">
                            <a href="\" className="img logo rounded-circle mb-5 "> <MDBIcon icon="arrow-left" /> License Manager</a>
                            <ul className="list-unstyled components mb-5">
                                <li>
                                    <a href="/dashboard">About</a>
                                </li>
                                <li>
                                    <a href="/dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                                    <ul className="collapse list-unstyled" id="pageSubmenu">
                                        <li>
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/dashboard/table">Table</a>
                                </li>
                                <li>
                                    <a href="/dashboard/userProfile">User Profile</a>
                                </li>
                                <li>
                                    <a href="/dashboard">Contact</a>
                                </li>
                                {/* <li> */}
                                {/* <a href="\login" onClick={this.onLogoutClick} >Logout</a> */}
                                {/* <a href="/login" target="_blank" rel="noopener noreferrer" onClick={this.onLogoutClick}>Logout</a> */}
                                {/* <Link
                                        to="/login"
                                        onClick={this.onLogoutClick}
                                    >
                                        Logout
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        to="/"
                                        onClick={ this.onLogoutClick}
                                    >
                                        <i className="fa fa-sign-out pull-right"></i>
                                    Log Out
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </>
        );
    }
}

Sidebar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Sidebar);