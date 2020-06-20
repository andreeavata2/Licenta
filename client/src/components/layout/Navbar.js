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
    $(".profile .icon_wrap").click(function () {
        $(this).parent().toggleClass("active");
        $(".notifications").removeClass("active");
    });

    $(".notifications .icon_wrap").click(function () {
        $(this).parent().toggleClass("active");
        $(".profile").removeClass("active");
    });

    $(".show_all .link").click(function () {
        $(".notifications").removeClass("active");
        $(".popup").show();
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

                    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed">
                        <a className="navbar-brand" href="\">License Manager</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-md-auto">
                                <div class="navbar_right  nav-link">
                                    <div class="notifications" style={{ marginRight: "0px" }}>
                                        <div class="icon_wrap"><i class="far fa-bell" style={{ fontSize: "20px" }}></i></div>

                                        <div class="notification_dd">
                                            <ul class="notification_ul">
                                                <li class="starbucks success">
                                                    <div class="notify_data">
                                                        <div class="title">
                                                            Lorem, ipsum dolor.
                                                            </div>
                                                        <div class="sub_title">
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            </div>
                                                    </div>
                                                    <div class="notify_status">
                                                        <p>Success</p>
                                                    </div>
                                                </li>
                                                <li class="baskin_robbins failed">
                                                    <div class="notify_data">
                                                        <div class="title">
                                                            Lorem, ipsum dolor.
                                                            </div>
                                                        <div class="sub_title">
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            </div>
                                                    </div>
                                                    <div class="notify_status">
                                                        <p>Failed</p>
                                                    </div>
                                                </li>
                                                <li class="mcd success">
                                                    <div class="notify_data">
                                                        <div class="title">
                                                            Lorem, ipsum dolor.
                                                            </div>
                                                        <div class="sub_title">
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            </div>
                                                    </div>
                                                    <div class="notify_status">
                                                        <p>Success</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


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

                                <Feedback />

                                {isAuthenticated ? (
                                    <>
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
                                               <i className="fa fa-sign-out"></i>
                                            </Link>
                                        </div>
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
