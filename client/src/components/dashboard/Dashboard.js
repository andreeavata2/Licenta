import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter, Route, Router } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";

import "./style.css";
import Sidebar from "./Sidebar";
import Table from "./Table";

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
                <Table />
                {/* <Route exact path="/dashboard/table" component={Table} /> */}
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