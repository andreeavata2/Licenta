import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";

import "./style.css";
import Sidebar from "./Sidebar";
import StudentTable from "./Table";
import UserProfile from './UserProfile';

class Dashboard extends Component {
    static propTypes = {
        getStudentList: PropTypes.func.isRequired,
        student: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getStudentList();
    }

    render() {
        return (
            // <Router>
                <div className="wrapper d-flex align-items-stretch">
                    <Sidebar />
                    {/* <Route exact path="/dashboard" component={Sidebar} /> */}

                    {/* <StudentTable /> */}
                    {/* <Route exact path="/dashboard/table" component={Table} /> */}


                    <UserProfile />



                </div>
            // </Router>
        );
    }
}




const mapStateToProps = (state) => ({
    student: state.student
});

// export default connect(
//     mapStateToProps,
//     { getStudentList }
// )(withRouter(Dashboard));

export default withRouter(connect(mapStateToProps, { getStudentList })(Dashboard));