import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";

import "./style.css";
import Sidebar from "./Sidebar";

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
            <>
                <div className="wrapper d-flex align-items-stretch">
                    <Sidebar />
                </div>
                
            </>
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