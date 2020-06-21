import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";

import { Row, Col, Table, Grid } from "react-bootstrap";
// import { Grid } from "react-bootstrap";
import Card from "./card/Card";
import { MDBIcon } from "mdbreact";
// import "./style.css";

class StudentTable extends Component {
    static propTypes = {
        getStudentList: PropTypes.func.isRequired,
        student: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getStudentList();
    }

    render() {
        const { students } = this.props.student;
        const { user } = this.props.auth;
        return (
            <>
                <div id="content" className="p-4 p-md-5">
                    <div className="container dashboard">
                        <Grid fluid>
                            <Row>
                                <Col md={12}>
                                    <Card
                                        title="Students List"
                                        category="Here is a list with all my students"
                                        ctTableFullWidth
                                        ctTableResponsive
                                        content={
                                            <Table striped hover>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Prof</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {students.map((studentt, index) =>
                                                        studentt.licenseTeacher === user.name ? (
                                                            <tr key={index}>
                                                                <td>
                                                                    {index + 1}
                                                                </td>
                                                                <td>{studentt.name}</td>
                                                                <td>{studentt.email}</td>
                                                                <td>{studentt.licenseTeacher}</td>
                                                                <td> <MDBIcon icon="trash" /> </td>
                                                            </tr>
                                                        ) : (null)

                                                    )}
                                                </tbody>
                                            </Table>
                                        }
                                    />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </>
        );
    }
}




const mapStateToProps = (state) => ({
    student: state.student,
    auth: state.auth,
});

// export default connect(
//     mapStateToProps,
//     { getStudentList }
// )(withRouter(Dashboard));

export default withRouter(connect(mapStateToProps, { getStudentList })(StudentTable));