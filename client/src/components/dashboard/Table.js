import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";

import { Row, Col, Table, Grid} from "react-bootstrap";
// import { Grid } from "react-bootstrap";
import Card from "./card/Card";
// import "./style.css";

class StudentTable extends Component {
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
                <div id="content" className="p-4 p-md-5">
                    <div className="container dashboard">
                        <Grid fluid>
                            <Row>
                                <Col md={12}>
                                    <Card
                                        title="Students Table"
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
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {students.map((studentt, index) =>
                                                        <tr key={index}>
                                                            <td>
                                                                {index + 1}
                                                            </td>
                                                            <td>{studentt.name}</td>
                                                            <td>{studentt.email}</td>
                                                        </tr>
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
    student: state.student
});

// export default connect(
//     mapStateToProps,
//     { getStudentList }
// )(withRouter(Dashboard));

export default withRouter(connect(mapStateToProps, { getStudentList })(StudentTable));