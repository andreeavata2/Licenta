import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './Dashboard.css'

import { Row, Col, Table, Grid } from "react-bootstrap";
// import { Grid } from "react-bootstrap";
import Card from "./card/Card";
import { MDBIcon } from "mdbreact";
// import "./style.css";

import { getAnnouncementsList } from "../../actions/announcementAction";
import { deleteAnnouncement } from './../../actions/announcementAction';

class Announcements extends Component {
    static propTypes = {
        getAnnouncementsList: PropTypes.func.isRequired,
        announcements: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getAnnouncementsList();
    }

    onDelete = async (id) => {
        await this.props.deleteAnnouncement(id);
        await this.props.getAnnouncementsList();

    };

    render() {
        const { announcements } = this.props.announcements;
        const { user } = this.props.auth;
        return (
            <>
                <div id="content" className="p-4 p-md-5">
                    <div className="container dashboard">
                        <Grid fluid>
                            <Row>
                                <Col md={12}>
                                    <Card
                                        title="Announcements Posts"
                                        category={`Here is a list with all announcements from my License Teacher, ${user.licenseTeacher}`}
                                        ctTableFullWidth
                                        ctTableResponsive
                                        content={
                                            <Table striped hover>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Message</th>
                                                        <th scope="col">Type</th>
                                                        {user.typeUser === "professor" ? (
                                                            <th scope="col"></th>
                                                        ) : (null)}

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {announcements.reverse().map((announcements, index) =>
                                                        user.typeUser === "professor" ? (
                                                            announcements.name === user.name ? (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {index + 1}
                                                                    </td>
                                                                    <td>{announcements.title}</td>
                                                                    <td>{announcements.name}</td>
                                                                    <td>{announcements.date}</td>
                                                                    <td>{announcements.message}</td>
                                                                    {announcements.typeAnnouncement === "Important" ? (<td style={{ color: "red" }}>
                                                                        {announcements.typeAnnouncement}
                                                                    </td>
                                                                    ) : (announcements.typeAnnouncement === "Alert" ? (
                                                                        <td style={{ color: "orange" }}>{announcements.typeAnnouncement}</td>
                                                                    ) : (<td style={{ color: "green" }}>{announcements.typeAnnouncement}</td>))
                                                                    }

                                                                    {user.typeUser === "professor" ? (
                                                                        <td>
                                                                            <button style={{ width: "auto", margin: "0", border: "none" }}
                                                                                // onDelete={this.onDelete(announcements._id)}
                                                                                onClick={() => this.onDelete(announcements._id)}
                                                                            >
                                                                                <MDBIcon icon="trash" />
                                                                            </button>
                                                                        </td>
                                                                    ) : (null)}

                                                                </tr>

                                                            ) : (null)
                                                        ) : (
                                                                user.licenseTeacher === announcements.name ? (
                                                                    < tr key={index} >
                                                                        <td>
                                                                            {index + 1}
                                                                        </td>
                                                                        <td>{announcements.title}</td>
                                                                        <td>{announcements.name}</td>
                                                                        <td>{announcements.date}</td>
                                                                        <td>{announcements.message}</td>
                                                                        {
                                                                            announcements.typeAnnouncement === "Important" ? (<td style={{ color: "red" }}>
                                                                                {announcements.typeAnnouncement}
                                                                            </td>
                                                                            ) : (announcements.typeAnnouncement === "Alert" ? (
                                                                                <td style={{ color: "orange" }}>{announcements.typeAnnouncement}</td>
                                                                            ) : (<td style={{ color: "green" }}>{announcements.typeAnnouncement}</td>))
                                                                        }

                                                                        {
                                                                            user.typeUser === "professor" ? (
                                                                                <td>
                                                                                    <button style={{ width: "auto", margin: "0", border: "none" }}
                                                                                        // onDelete={this.onDelete(announcements._id)}
                                                                                        onClick={() => this.onDelete(announcements._id)}
                                                                                    >
                                                                                        <MDBIcon icon="trash" />
                                                                                    </button>
                                                                                </td>
                                                                            ) : (null)
                                                                        }
                                                                    </tr>
                                                                ) : (null)
                                                            )
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
    deleteAnnouncement: PropTypes.func.isRequired,
    announcements: state.announcements,
    auth: state.auth,
});

export default withRouter(connect(mapStateToProps, { getAnnouncementsList, deleteAnnouncement })(Announcements));