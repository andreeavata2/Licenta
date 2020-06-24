import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "../layout/Navbar";

import "./Login.css"
import 'bootstrap/dist/css/bootstrap.css';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "alex.moruz@yahoo.com",
            password: "parola123",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
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

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);

        this.props.loginUser(userData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    render() {
        const { errors } = this.state;
        return (
            <>
                <Navbar />
                <div className="container-fluid">
                    <div className="row main-content bg-success text-center">
                        <div className="col-md-4 text-center company__info">

                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="col s12">
                                    <h2>LOGIN</h2>
                                </div>
                                <div className="col s12">
                                    <form control="" className="form-group" noValidate onSubmit={this.onSubmit}>
                                        <div className="input-field col s12">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                                name="email"
                                                className={classnames("form__input", {
                                                    invalid: errors.email || errors.emailnotfound
                                                })}
                                                placeholder="Email"
                                            />
                                            <span className="red-text">
                                                {errors.email}
                                                {errors.emailnotfound}
                                            </span>
                                        </div>
                                        <div className="input-field col s12">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                id="password"
                                                type="password"
                                                name="password"
                                                className={classnames("form__input", {
                                                    invalid: errors.password || errors.passwordincorrect
                                                })}
                                                placeholder="Password"
                                            />
                                            <span className="red-text">
                                                {errors.password}
                                                {errors.passwordincorrect}
                                            </span>
                                        </div>
                                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                            <button
                                                style={{
                                                    width: "150px",
                                                    borderRadius: "3px",
                                                    letterSpacing: "1.5px",
                                                    marginTop: "1rem"
                                                }}
                                                type="submit"
                                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                            >
                                                Login
                                        </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col s12">
                                    <p>Don't have an account?
                                    <Link
                                            to="/register"
                                            style={{
                                                width: "140px",
                                                borderRadius: "3px",
                                                margin: "10px"
                                            }}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                        >
                                            Register here
                                    </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);