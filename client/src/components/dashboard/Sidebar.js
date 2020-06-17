import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";

import "./style.css";

class Sidebar extends Component {
    render() {
        return (
            <>
                <div className="wrapper d-flex align-items-stretch">
                    <nav id="sidebar">
                        <div className="p-4 pt-5">
                            {/* <a className="navbar-brand" href="\">License Manager</a> */}

                            <a href="\" className="img logo rounded-circle mb-5">License Manager</a>
                            <ul className="list-unstyled components mb-5">
                                {/* <li>
                                <a href="#">Home</a>
                                </li> */}
                                {/* <li className="active">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                                    <ul className="collapse list-unstyled" id="homeSubmenu">
                                        <li>
                                            <a href="#">Home 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Home 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Home 3</a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
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
                                    <a href="dashboard/userInfo">User Profile</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </>
        );
    }
}

export default Sidebar;