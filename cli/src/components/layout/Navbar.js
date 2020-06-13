import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="total-navbar">
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
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
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Home
                            </Link>
                            <span className="sr-only">(current)</span></div>
                        <div className="nav-item nav-link">
                            <Link
                                to="/"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Chat
                            </Link></div>
                        <div className="nav-item nav-link">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
