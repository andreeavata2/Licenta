import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">

                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="col s12">
                                <h2>Register</h2>
                            </div>

                            <div className="col s12">
                                <p>Already have an account?
                                    <Link
                                        to="/login"
                                        style={{
                                            width: "140px",
                                            borderRadius: "3px",
                                            // letterSpacing: "1.5px",
                                            margin: "10px"
                                        }}
                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>

                            {/* <p className="grey-text text-darken-1">
                                Already have an account?
                                <Link
                                    to="/login"
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        margin: "10px"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Register here
                                    </Link>
                            </p> */}
                            <div className="col s12">
                                {/* <form noValidate onSubmit={this.onSubmit}> */}
                                <form control="" className="form-group" noValidate onSubmit={this.onSubmit}>
                                    <div className="col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.name}
                                            error={errors.name}
                                            id="name"
                                            type="text"
                                            name="name"
                                            className="form__input"
                                            // className={classnames("", {
                                            //     invalid: errors.name
                                            // })}
                                            placeholder="Name"
                                        />
                                        <span className="red-text">{errors.name}</span>
                                    </div>
                                    <div className="col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                            type="text"
                                            name="email"
                                            className="form__input"
                                            // className={classnames("", {
                                            //     invalid: errors.email
                                            // })}
                                            placeholder="Email"
                                        />
                                        <span className="red-text">{errors.email}</span>
                                    </div>
                                    <div className="col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            type="password"
                                            name="password"
                                            className="form__input"
                                            // className={classnames("", {
                                            //     invalid: errors.password
                                            // })}
                                            placeholder="Password"
                                        />
                                        <span className="red-text">{errors.password}</span>
                                    </div>
                                    <div className="col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password2}
                                            error={errors.password2}
                                            id="password2"
                                            type="password2"
                                            name="password2"
                                            className="form__input"
                                            // className={classnames("", {
                                            //     invalid: errors.password2
                                            // })}
                                            placeholder="Confirm Password"
                                        />
                                        <span className="red-text">{errors.password2}</span>
                                    </div>
                                    {/* <div className="row">
                                        <input type="checkbox" name="remember_me" id="remember_me" className="" />
                                        <label for="remember_me">Remember Me!</label>
                                    </div> */}

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
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));

// export default Register;
