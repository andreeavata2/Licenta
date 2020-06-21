import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import './Dashboard.css'

import { logoutUser } from "../../actions/authActions";
import { MDBIcon } from "mdbreact";


import "./style.css";

class Sidebar extends Component {
    onLogoutClick = e => {
        this.props.history.push('/');
        e.preventDefault();
        this.props.logoutUser();

    };
    render() {
        const { user } = this.props.auth;
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
                                {user.typeUser === "professor" ? (
                                    <>
                                        <li>
                                            <a href="/dashboard/table">List with my students</a>
                                        </li>
                                        <li>
                                            <a href="/dashboard/addAnnouncement">Add Announcement</a>
                                        </li>
                                    </>
                                ) : (
                                        null
                                    )}
                                <li>
                                    <a href="/dashboard/allAnnouncement">Announcements posts</a>
                                </li>
                                <li>
                                    <a href="/dashboard/userProfile">User Profile</a>
                                </li>

                                <li>
                                    <Link
                                        to='/'
                                        onClick={this.onLogoutClick}
                                    >
                                        {/* <i className="fa fa-sign-out pull-right"></i> */}
                                        <MDBIcon icon="sign-out-alt" className="pull-right" />
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
)(withRouter(Sidebar));
