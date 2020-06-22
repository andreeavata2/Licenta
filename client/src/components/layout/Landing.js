import React, { Component } from 'react'
import "../../assets/css/bootstrap.css";
import "../../assets/css/homePage.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFeedbacksList } from "../../actions/feedbackActions";

import imageBackground1 from "../../assets/img/teacher-and-student.jpg";
import imageBackground2 from "../../assets/img/header-3.jpg";
import face1 from "../../assets/img/faces/face_1.jpg";
import face2 from "../../assets/img/faces/face_2.jpg";
import face3 from "../../assets/img/faces/face_3.jpg";
import Navbar from './Navbar';
import feedbackReducers from '../../reducers/feedbackReducers';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "./questions.css";

class Landing extends Component {
    static propTypes = {
        getFeedbacksList: PropTypes.func.isRequired,
        feedbacks: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getFeedbacksList();
    }

    render() {
        const { feedbacks } = this.props.feedbacks;
        var face = "";
        return (
            <>
                <Navbar />
                <div>
                    <div className="main-page">
                        <div className="section section-header">
                            <div className="parallax filter filter-color-red">
                                <div className="image"
                                    style={{
                                        backgroundImage: "url(" + imageBackground1 + ")",
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                </div>

                                <div className="jumbotron vertical-center">
                                    <div className="container" style={{ textAlign: "center" }}>
                                        <div className="content">
                                            <div className="title-area">
                                                <h1 className="title-modern">License Management</h1>
                                                <div className="separator line-separator">♦</div>
                                                <h3>The most useful site for organizing licenses!</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="title-area">
                                    <h2>Our Services</h2>
                                    <div className="separator separator-danger">✻</div>
                                    <p className="description">We promise you a new look and more importantly, a new attitude. We build that
                    by getting to know you, your needs and creating the best looking clothes.</p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <div className="icon text-danger">
                                            {/* <i className="pe-7s-graph1"></i> */}
                                            <MDBIcon icon="bell" style={{ width: "auto" }} />
                                        </div>
                                        <h3>Notifications</h3>
                                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into
                        your clothes.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <div className="icon text-danger">
                                            {/* <i className="pe-7s-note2"></i> */}
                                            <MDBIcon icon="comments" style={{ width: "auto" }} />
                                        </div>
                                        <h3>Chat</h3>
                                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we
                        provide..</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <div className="icon text-danger">
                                            {/* <i className="fas fa-music"></i> */}
                                            <MDBIcon icon="university" style={{ width: "auto" }} />
                                        </div>

                                        <h3>Students Management</h3>
                                        <p className="description">We like to present the world with our work, so we make sure we spread the
                        word regarding our clothes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="section section-our-team-index">
                        <div className="parallax filter filter-color-black">
                            <div className="image"
                                style={{
                                    backgroundImage: "url(" + imageBackground2 + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                            </div>
                            <div className="container">
                                <div className="content">
                                    <div className="row">
                                        <div className="title-area">
                                            <h2>Our Feedbacks</h2>
                                            <div className="separator separator-danger">✻</div>
                                            <p className="description">We are a team that has thought of making your life easier when it
                            comes to preparing the license and presenting it.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="team">
                                    <div className="row">
                                        <div className="col-md-10 col-md-offset-1">
                                            <div className="row">
                                                {feedbacks.reverse().map((feedback, index) =>
                                                    index < 3 ? (
                                                        <div className="col-md-4" key={index}>
                                                            <div className="card card-member">
                                                                <div className="content" style={{ height: "400px" }}>
                                                                    <div className="avatar avatar-danger">
                                                                        <img src={face1} />;
                                                                    </div>
                                                                    <div className="description">
                                                                        <h3 className="title">{feedback.name}</h3>
                                                                        <p className="small-text">Positive Feedback</p>
                                                                        <p className="description">{feedback.message}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (null)
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section section-small section-contact">
                        <div className="parallax filter">
                            <div className="image">
                            </div>
                            <div className="container">
                                <div className="title-area">
                                    <h2 className="text-black">Do you have a question for us?</h2>
                                    <div className="separator separator-danger">♦</div>
                                    <p className="description"> If you have any questions or problems, do not hesitate to contact us. We will
                                        answer you as soon as possible.</p>
                                </div>

                                {/* <form control="" className="form panel-body" noValidate onSubmit={this.onSubmit}> */}
                                <form control="" className="form panel-body">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="5"
                                            cols="30"
                                            placeholder="Enter your question here.."
                                        >
                                        </textarea>
                                    </div>
                                    <button className="btn btn-danger btn-fill btn-lg" type="submit">Send</button>
                                </form>
                            </div>

                            <div className="container">
                                <div className="panel-group" id="accordion">
                                    <h2 className="text-black">General questions</h2>
                                    <div className="separator separator-danger">♦</div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="accordion-toggle" data-toggle="collapse" data-target="#collapseOne" data-parent="#accordion">Is account registration required?</a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="collapse in">
                                            <p className="description">
                                                Account registration at <strong>PrepBootstrap</strong> is only required if you will be selling or buying themes.
                                                This ensures a valid communication channel for all parties involved in any transactions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="accordion-toggle collapsed" data-toggle="collapse" data-target="#collapseTen" data-parent="#accordion">Can I submit my own Bootstrap templates or themes?</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTen" className="collapse in">
                                            <p className="description">
                                                A lot of the content of the site has been submitted by the community. Whether it is a commercial element/template/theme
                                                or a free one, you are encouraged to contribute. All credits are published along with the resources.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="accordion-toggle collapsed" data-toggle="collapse" data-target="#collapseEleven" data-parent="#accordion">What is the currency used for all transactions?</a>
                                            </h4>
                                        </div>
                                        <div id="collapseEleven" className="collapse in">
                                            <p className="description">
                                                All prices for themes, templates and other items, including each seller's or buyer's account balance are in <strong>USD</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* <!-- <footer className="footer" data-color="black"> --> */}
                    <footer className="footer">
                        <div className="container">
                            <div className="copyright">
                                Copyright © 2020 UAIC - Elaboration Of The Bachelor's Thesis - Designed by Vatamanelu Andreea
                        </div>
                        </div>
                    </footer>


                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    feedbacks: state.feedbacks
});

export default withRouter(connect(mapStateToProps, { getFeedbacksList })(Landing));
