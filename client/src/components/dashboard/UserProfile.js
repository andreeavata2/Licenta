import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    FormControl
} from "react-bootstrap";

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
                                            ncols={["col-md-5", "col-md-3", "col-md-4"]}
                                            properties={[
                                                {
                                                    label: "Company (disabled)",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Company",
                                                    defaultValue: "Creative Code Inc.",
                                                    disabled: true
                                                },
                                                {
                                                    label: "Username",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Username",
                                                    defaultValue: "michael23"
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
                                            ncols={["col-md-6", "col-md-6"]}
                                            properties={[
                                                {
                                                    label: "First name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "First name",
                                                    defaultValue: "Mike"
                                                },
                                                {
                                                    label: "Last name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Last name",
                                                    defaultValue: "Andrew"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            properties={[
                                                {
                                                    label: "Adress",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Home Adress",
                                                    defaultValue:
                                                        "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                            properties={[
                                                {
                                                    label: "City",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "City",
                                                    defaultValue: "Mike"
                                                },
                                                {
                                                    label: "Country",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Country",
                                                    defaultValue: "Andrew"
                                                },
                                                {
                                                    label: "Postal Code",
                                                    type: "number",
                                                    bsClass: "form-control",
                                                    placeholder: "ZIP Code"
                                                }
                                            ]}
                                        />
                                        <Button bsStyle="info" pullRight fill type="submit">
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
