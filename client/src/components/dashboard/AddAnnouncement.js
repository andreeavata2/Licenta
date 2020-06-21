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

import { addAnnouncement } from "../../actions/announcementAction";


class AddAnnouncement extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            name: "",
            date: "",
            message: "",
            typeAnnouncement: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newAnnouncement = {
            title: this.state.title,
            name: this.state.name,
            date: this.state.date,
            message: this.state.message,
            typeAnnouncement: this.state.typeAnnouncement
        };
        console.log(newAnnouncement);

        this.props.addAnnouncement(newAnnouncement, this.props.history);
        window.location.reload(false);
    };

    render() {
        const { errors } = this.state;
        // const { user } = this.state.auth;
        return (
            <div id="content" className="p-4 p-md-5">
                <div className="container dashboard">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <Card
                                    title="Add Announcement"
                                    content={
                                        <form control="" noValidate onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <input className="col-md-12"
                                                    onChange={this.onChange}
                                                    value={this.state.title}
                                                    error={errors.title}
                                                    id="title"
                                                    type="text"
                                                    name="title" autoFocus
                                                    className="form-control"
                                                    placeholder="Announcement title"
                                                />
                                                <span className="red-text">{errors.title}</span>
                                            </div>

                                            <div className="form-group">
                                                <input className="col-md-5"
                                                    onChange={this.onChange}
                                                    value={this.state.name}
                                                    error={errors.name}
                                                    id="name"
                                                    name="name" autoFocus
                                                    className="form-control"
                                                    placeholder="Ful name"
                                                />
                                                <span className="red-text">{errors.name}</span>
                                            </div>

                                            <div className="form-group">
                                                <input className="col-md-7"
                                                    onChange={this.onChange}
                                                    value={this.state.date}
                                                    error={errors.date}
                                                    type="date"
                                                    id="date"
                                                    name="date" autoFocus
                                                    className="form-control"
                                                    placeholder="Date"
                                                />
                                                <span className="red-text">{errors.date}</span>
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.message}
                                                    error={errors.message}
                                                    id="message"
                                                    name="message" autoFocus
                                                    className="form-control"
                                                    placeholder="Enter your announcement"
                                                />
                                                <span className="red-text">{errors.message}</span>
                                            </div>

                                            <div className="form-group">
                                                <select
                                                    onChange={this.onChange}
                                                    value={this.state.typeAnnouncement}
                                                    error={errors.typeAnnouncement}
                                                    name="typeAnnouncement"
                                                    id="typeAnnouncement"
                                                    name="typeAnnouncement" autoFocus
                                                    // form="carform"
                                                    className="form-control"
                                                >
                                                    <option>Type of Announcement</option>
                                                    <option value="Important">Important</option>
                                                    <option value="Alert">Alert</option>
                                                    <option value="Informative">Informative</option>
                                                </select>
                                                <span className="red-text">{errors.typeAnnouncement}</span>
                                            </div>
                                            <Button bsStyle="info" pullRight fill type="submit" style={{ width: "auto" }}>
                                                Add Announcement
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
    addAnnouncement: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    { addAnnouncement }
)(withRouter(AddAnnouncement));
