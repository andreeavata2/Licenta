import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Feedback from "./Feedback";
import { DropdownButton, MenuItem } from 'react-bootstrap';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import "./notificationButton.css";
import $ from "jquery";

$(document).ready(function () {
    $(".notifications .icon_wrap").click(function () {
        $(this).parent().toggleClass("active");
        $(".profile").removeClass("active");
    });
    $(".close").click(function () {
        $(".popup").hide();
    });
});


class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        const isAuthenticated = this.props.auth.isAuthenticated;
        return (
            <>

                <div className="total-navbar">
                    <Feedback />


                    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed">
                        <a className="navbar-brand" href="\">License Manager</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-md-auto">
                                <ul className="nav navbar-nav navbar-right navbar-uppercase">
                                    <li>
                                        <div className="navbar_right  nav-link">
                                            <div className="notifications" style={{ marginRight: "0px" }}>
                                                <div className="icon_wrap">
                                                    <i className="far fa-bell" style={{ fontSize: "20px" }}></i>
                                                    <span className="badge" style={{
                                                        position: "absolute",
                                                        top: "-10px",
                                                        right: "-10px",
                                                        padding: "0px",
                                                        background: "red",
                                                        color: "white"
                                                    }}>3</span>
                                                </div>

                                                <div className="notification_dd">
                                                    <ul className="notification_ul">
                                                        <li className="starbucks success">
                                                            <div className="notify_data">
                                                                <div className="title">
                                                                    Lorem, ipsum dolor.
                                                            </div>
                                                                <div className="sub_title">
                                                                    Lorem ipsum dolor sit amet consectetur.
                                                            </div>
                                                            </div>
                                                            <div className="notify_status">
                                                                <p>Success</p>
                                                            </div>
                                                        </li>
                                                        <li className="baskin_robbins failed">
                                                            <div className="notify_data">
                                                                <div className="title">
                                                                    Lorem, ipsum dolor.
                                                            </div>
                                                                <div className="sub_title">
                                                                    Lorem ipsum dolor sit amet consectetur.
                                                            </div>
                                                            </div>
                                                            <div className="notify_status">
                                                                <p>Failed</p>
                                                            </div>
                                                        </li>
                                                        <li className="mcd success">
                                                            <div className="notify_data">
                                                                <div className="title">
                                                                    Lorem, ipsum dolor.
                                                            </div>
                                                                <div className="sub_title">
                                                                    Lorem ipsum dolor sit amet consectetur.
                                                            </div>
                                                            </div>
                                                            <div className="notify_status">
                                                                <p>Success</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="nav-item nav-link active">
                                            <Link
                                                to="/"
                                                style={{
                                                    width: "auto",
                                                    borderRadius: "3px",
                                                    letterSpacing: "1.5px"
                                                }}
                                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                            >
                                                Home
                                    </Link>
                                            {/* <span className="sr-only">(current)</span> */}
                                        </div>
                                    </li>


                                    {isAuthenticated ? (
                                        <>
                                            <li>
                                                <div className="nav-item nav-link">
                                                    <Link
                                                        to="/chat"
                                                        style={{
                                                            width: "auto",
                                                            borderRadius: "3px",
                                                            letterSpacing: "1.5px"
                                                        }}
                                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                                    >
                                                        Chat
                                            </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="nav-item nav-link">
                                                    <Link
                                                        to="/dashboard"
                                                        style={{
                                                            width: "auto",
                                                            borderRadius: "3px",
                                                            letterSpacing: "1.5px"
                                                        }}
                                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                                    >
                                                        <MDBIcon icon="user" /> {user.name.split(" ")[0]},  {user.typeUser}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="nav-item nav-link">
                                                    <Link
                                                        to="/"
                                                        style={{
                                                            width: "auto",
                                                            borderRadius: "3px",
                                                            letterSpacing: "1.5px"
                                                        }}
                                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                                        onClick={this.onLogoutClick}
                                                    >
                                                        Logout
                                                        {/* <i className="fa fa-sign-out"></i> */}
                                                        <MDBIcon icon="sign-out-alt" />
                                                    </Link>
                                                </div>
                                            </li>
                                        </>
                                    ) : (
                                            <div className="nav-item nav-link">
                                                <Link
                                                    to="/login"
                                                    style={{
                                                        width: "auto",
                                                        borderRadius: "3px",
                                                        letterSpacing: "1.5px"
                                                    }}
                                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                                >
                                                    Login
                                            </Link>
                                            </div>

                                        )}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    };
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);
