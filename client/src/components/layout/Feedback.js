import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFeedback } from "../../actions/feedbackActions";

import "../../assets/js/feedback";

class Feedback extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
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

        const newFeedback = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };
        console.log(newFeedback);

        this.props.addFeedback(newFeedback, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div id="feedback">
                <div id="feedback-form" style={{ display: "none" }} className="col">
                    <form control="" className="form panel-body" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="text"
                                name="name" autoFocus
                                className="form-control"
                                placeholder="Your name"
                            />
                            <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                className="form-control"
                                name="email" autoFocus
                                placeholder="Your e-mail"
                                type="email"
                            />
                            <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="form-group">
                            <textarea
                                onChange={this.onChange}
                                value={this.state.message}
                                error={errors.message}
                                id="message"
                                className="form-control"
                                name="body" required
                                placeholder="Please write your feedback here..."
                                rows="5"
                                maxLength="300"
                            />
                            <span className="red-text">{errors.message}</span>
                        </div>
                        <button className="btn btn-primary pull-right" type="submit" style={{margin: "0px"}}>Send</button>
                    </form>
                </div>
                <div id="feedback-tab">Feedback</div>
            </div>
        )
    }
}


Feedback.propTypes = {
    addFeedback: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addFeedback }
)(withRouter(Feedback));
