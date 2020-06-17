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

// import 'bootstrap/dist/css/bootstrap.min.css';

class UserProfile extends Component {
    render() {
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
                                                        // placeholder: "Company",
                                                        defaultValue: "Student / Professor",
                                                        disabled: true
                                                    },
                                                    {
                                                        label: "Email address",
                                                        type: "email",
                                                        bsClass: "form-control",
                                                        placeholder: "Email"
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
                                                        defaultValue: "Mike Andrew"
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

                                            <Col md={14} className="form-group">
                                                <label htmlFor="feInputState" style={{
                                                    "textAlign": "left",
                                                    "fontSize": "12px",
                                                    "marginBottom": "5px",
                                                    "textTransform": "uppercase",
                                                    "color": "#9a9a9a",
                                                    "display": "inline-block",
                                                    "maxWidth": "100%"
                                                }}
                                                >License Teacher</label>
                                                <FormSelect id="feInputState">
                                                    <option>Choose...</option>
                                                    <option>Alex Moruz</option>
                                                    <option>Florin Olariu</option>
                                                    <option>Adrian Iftene</option>

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

export default UserProfile;
