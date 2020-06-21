import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    FormControl,
    NavDropdown,
    MenuItem
} from "react-bootstrap";
import { FormSelect } from "shards-react";

import { Card } from "./card/Card";
import { FormInputs } from "./FormInputs/FormInputs";
import { UserCard } from "./UserCard/UserCard";
import Button from "./CustomButton/CustomButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";

import { getStudentList } from "../../actions/studentActions";


class AddAnnouncement extends Component {
    render() {
        const { user } = this.props.auth;
        return (
            <div id="content" className="p-4 p-md-5">
                <div className="container dashboard">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <Card
                                    title="Add Announcement"
                                    content={
                                        <form>
                                            <FormInputs
                                                ncols={["col-md-12" ]}
                                                properties={[
                                                    {
                                                        label: "Title",
                                                        type: "text",
                                                        bsClass: "form-control",
                                                        placeholder: "Announcement title",
                                                        // disabled: true
                                                    }
                                                ]}
                                                
                                            />
                                            
                                            <FormInputs
                                                ncols={["col-md-5", "col-md-7"]}
                                                properties={[
                                                    {
                                                        label: "Full name",
                                                        type: "text",
                                                        bsClass: "form-control",
                                                        placeholder: "Ful name",
                                                        defaultValue: user.name
                                                    },
                                                    {
                                                        label: "Date of Publication",
                                                        type: "Date",
                                                        bsClass: "form-control",
                                                        placeholder: "Date",
                                                        // defaultValue:  new Date().getDate()
                                                    }
                                                ]}
                                            />

                                            <FormInputs
                                                ncols={["col-md-12"]}
                                                properties={[
                                                    {
                                                        label: "Message",
                                                        type: "text",
                                                        bsClass: "form-control",
                                                        placeholder: "Enter your announcement"
                                                    }
                                                ]}
                                            />
                                             <Col md={4} className="form-group">
                                                        <label htmlFor="feInputState" style={{
                                                            "textAlign": "left",
                                                            "fontSize": "12px",
                                                            "marginBottom": "5px",
                                                            "textTransform": "uppercase",
                                                            "color": "#9a9a9a",
                                                            "display": "inline-block",
                                                            "maxWidth": "100%"
                                                        }}
                                                        >Type of Announcement</label>
                                                        <FormSelect id="feInputState">
                                                            <option>Choose...</option>
                                                            <option>Important</option>
                                                            <option>Alert</option>
                                                            <option>Informative</option>
                                                        </FormSelect>
                                                    </Col>
                                            <Button bsStyle="info" pullRight fill type="submit" style={{ width: "auto" }}>
                                                Update Profile
                                            </Button>
                                            <div className="clearfix" />
                                        </form>
                                    }
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}


AddAnnouncement.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    {}
)(withRouter(AddAnnouncement));
