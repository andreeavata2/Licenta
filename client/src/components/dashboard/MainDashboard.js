import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";

class MainDashboard extends Component {
    render() {
        const { user } = this.props.auth;
        return (
            <div id="content" className="p-4 p-md-5">
                <div className="container dashboard">
                    {user.typeUser === "student" ?
                        (
                            <>
                                <h2> Hi, {user.name}</h2>
                                <h4>This is a student account </h4>
                            </>
                        ) : (
                            <>
                                <h2> Hi, {user.name}</h2>
                                <h4>This is a professor account </h4>
                            </>
                        )
                    }
                </div>
            </div>
        );
    }
}

MainDashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    {}
)(withRouter(MainDashboard));
