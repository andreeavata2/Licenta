import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

import { MDBIcon } from "mdbreact";
import Feedback from "./Feedback";
import { getAnnouncementsList } from "../../actions/announcementAction";


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
    componentDidMount() {
        this.props.getAnnouncementsList();
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { announcements } = this.props.announcements;
        const { user } = this.props.auth;
        const isAuthenticated = this.props.auth.isAuthenticated;
        return (
            <>

                <div className="total-navbar">
                    <Feedback />


                    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed" style={{height: "45px"}}>
                        <a className="navbar-brand" href="\">License Manager</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-md-auto">
                                <ul className="nav navbar-nav navbar-right navbar-uppercase">


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
                                        </div>
                                    </li>


                                    {isAuthenticated ? (
                                        <>
                                            {user.typeUser === "student" ? (
                                                <li>
                                                    <div className="navbar_right  nav-link">
                                                        <div className="notifications" style={{ marginRight: "0px" }}>
                                                            <div className="icon_wrap">
                                                                <i className="far fa-bell" style={{ fontSize: "20px" }}></i>
                                                                <span className="badge" style={{
                                                                    fontSize: "10px",
                                                                    position: "absolute",
                                                                    top: "2px",
                                                                    right: "-10px",
                                                                    padding: "3px",
                                                                    background: "red",
                                                                    color: "white"
                                                                }}>3</span>
                                                            </div>

                                                            <div className="notification_dd">
                                                                {announcements.reverse().map((announcements, index) =>
                                                                    index <= 3 & user.licenseTeacher === announcements.name ? (
                                                                        <>
                                                                            <ul key={index} className="notification_ul">
                                                                                <li>
                                                                                    <div className="notify_data">
                                                                                        <div className="title">
                                                                                            {announcements.title}
                                                                                        </div>
                                                                                        <div className="sub_title">
                                                                                            {announcements.message}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="notify_status">
                                                                                        {announcements.typeAnnouncement === "Important" ? (<p style={{ color: "red" }}>
                                                                                            {announcements.typeAnnouncement}
                                                                                        </p>
                                                                                        ) : (announcements.typeAnnouncement === "Alert" ? (
                                                                                            <p style={{ color: "orange" }}>{announcements.typeAnnouncement}</p>
                                                                                        ) : (<p style={{ color: "green" }}>{announcements.typeAnnouncement}</p>))
                                                                                        }
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </>
                                                                    ) : (null)

                                                                )}
                                                                <div className="footer bg-dark text-center">
                                                                    <Link
                                                                        to="/dashboard/allAnnouncement"
                                                                        className="text-light"
                                                                    >
                                                                        View All
                                                        </Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>
                                            ) : (null)}

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
    getAnnouncementsList: PropTypes.func.isRequired,
    announcements: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    announcements: state.announcements,
});
export default connect(
    mapStateToProps,
    { logoutUser, getAnnouncementsList }
)(Navbar);
