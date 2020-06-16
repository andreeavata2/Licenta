import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";


class Dashboard extends Component {
    static propTypes = {
        getStudentList: PropTypes.func.isRequired,
        student: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getStudentList();
    }

    render() {
        const { students } = this.props.student;
        return (
            <>
                <div className="container dashboard">
                    <table
                        className='table table-bordered'
                        id='dataTable'
                        style={{ width: '100%' }}
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((studentt, index) =>
                                <tr>
                                    <td key={index}>
                                        {index + 1}
                                    </td>
                                    <td>{studentt.name}</td>
                                    <td>{studentt.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
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