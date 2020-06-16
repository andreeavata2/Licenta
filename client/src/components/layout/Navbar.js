import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

import { MDBRow, MDBCol, MDBIcon } from "mdbreact";


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

                                {isAuthenticated ? (
                                    <>
                                        <div className="nav-item nav-link">
                                            <Link
                                                to="/"
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
                                                <MDBIcon icon="user" /> {user.name.split(" ")[0]}
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
