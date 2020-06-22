import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";

import { Card } from "./card/Card";
import { FormInputs } from "./FormInputs/FormInputs";
import Button from "./CustomButton/CustomButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

class UserProfile extends Component {
    render() {
        const { user } = this.props.auth;
        return (
            <div id="content" className="p-4 p-md-5">
                <div className="container dashboard">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <Card
                                    title="Edit Profile"
                                    content={
                                        <form>
                                            <FormInputs
                                                ncols={["col-md-5", "col-md-7"]}
                                                properties={[
                                                    {
                                                        label: "User Type (disabled)",
                                                        type: "text",
                                                        bsClass: "form-control",
                                                        defaultValue: user.typeUser,
                                                        disabled: true
                                                    },
                                                    {
                                                        label: "Email address",
                                                        type: "email",
                                                        bsClass: "form-control",
                                                        placeholder: "Email",
                                                        defaultValue: user.email
                                                    }
                                                ]}
                                            />
                                            {user.typeUser === "student" ? (
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
                                                            label: "License Name",
                                                            type: "text",
                                                            bsClass: "form-control",
                                                            placeholder: "License Name",
                                                            defaultValue: "License Management"
                                                        }
                                                    ]}
                                                />
                                            ) : (
                                                    <FormInputs
                                                        ncols={["col-md-12"]}
                                                        properties={[
                                                            {
                                                                label: "Full name",
                                                                type: "text",
                                                                bsClass: "form-control",
                                                                placeholder: "Ful name",
                                                                defaultValue: user.name
                                                            }
                                                        ]}
                                                    />
                                                )
                                            }


                                            {user.typeUser === "student" ? (
                                                <FormInputs
                                                    ncols={["col-md-12"]}
                                                    properties={[
                                                        {
                                                            label: "License Teacher (disabled)",
                                                            type: "text",
                                                            bsClass: "form-control",
                                                            defaultValue: user.licenseTeacher,
                                                            disabled: true
                                                        }
                                                    ]}
                                                />
                                            ) : (null)}

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

UserProfile.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    {}
)(withRouter(UserProfile));
