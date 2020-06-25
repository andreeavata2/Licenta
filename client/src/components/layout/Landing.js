import React, { Component } from 'react'
import "../../assets/css/bootstrap.css";
import "../../assets/css/homePage.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFeedbacksList } from "../../actions/feedbackActions";
import { getQuestionsList, addQuestion, updateQuestion } from "../../actions/questionAction";

import imageBackground1 from "../../assets/img/teacher-and-student.jpg";
import imageBackground2 from "../../assets/img/header-3.jpg";
import avatar from "../../assets/img/faces/avatar.png"
import face1 from "../../assets/img/faces/face_1.jpg";
import face2 from "../../assets/img/faces/face_2.jpg";
import face3 from "../../assets/img/faces/face_3.jpg";
import Navbar from './Navbar';
import { MDBIcon } from "mdbreact";
import "./questions.css";

class Landing extends Component {
    static propTypes = {
        getFeedbacksList: PropTypes.func.isRequired,
        feedbacks: PropTypes.object.isRequired,
        getQuestionsList: PropTypes.func.isRequired,
        questions: PropTypes.object.isRequired,
        addQuestion: PropTypes.func.isRequired,
        updateQuestion: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = {
            question: "",
            answers: "",
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

    onChange = async (e) => {
        await this.setState({ [e.target.id]: e.target.value });
    };

    componentDidMount() {
        this.props.getFeedbacksList();
        this.props.getQuestionsList();
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const newQuestion = {
            question: this.state.question,
            answers: this.state.answers
        };

        console.log(newQuestion);
        await this.props.addQuestion(newQuestion, this.props.history);
        this.setState({
            question: ''
        })
    };
    onSubmitAnswer = async (e, index, id) => {
        e.preventDefault();
        if (this.state[`answer-${index}`]) {
            const newObj = {
                answers: this.state[`answer-${index}`]
            }
            await this.props.updateQuestion(id, newObj);
            this.setState({
                [`answer-${index}`]: ''
            })
        }
    }

    render() {
        const { feedbacks } = this.props.feedbacks;
        const { questions } = this.props.questions;
        const { errors } = this.state;
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
                                            <MDBIcon icon="bell" style={{ width: "auto" }} />
                                        </div>
                                        <h3>Notifications</h3>
                                        <p className="description">
                                            One feature of this application is that: professors can send notifications to the students they guide.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <div className="icon text-danger">
                                            <MDBIcon icon="comments" style={{ width: "auto" }} />
                                        </div>
                                        <h3>Chat</h3>
                                        <p className="description">
                                            Users can communicate with each other very easily
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <div className="icon text-danger">
                                            <MDBIcon icon="university" style={{ width: "auto" }} />
                                        </div>

                                        <h3>Students Management</h3>
                                        <p className="description">
                                            Each teacher can have access to information about his students.
                                        </p>
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
                                                                        <img src={avatar} />;
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

                                <form control="" className="form panel-body" noValidate onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.onChange}
                                            value={this.state.question}
                                            error={errors.question}
                                            id="question"
                                            className="form-control"
                                            name="message" required
                                            rows="5"
                                            cols="30"
                                            placeholder="Enter your question here.."
                                        >
                                        </textarea>
                                        <span className="red-text">{errors.question}</span>
                                    </div>

                                    <button className="btn btn-danger btn-fill btn-lg" type="submit">Send</button>
                                </form>
                            </div>

                            <div className="container">
                                <div className="panel-group" id="accordion">
                                    <h2 className="text-black">Frequently questions</h2>
                                    <div className="separator separator-danger">♦</div>
                                    <br></br>


                                    {questions.map((question, index) =>
                                        <>

                                            <div className="panel panel-default">
                                                <div key={index} className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <a className="accordion-toggle" data-toggle="collapse" data-target={`#${index}`} data-parent="#accordion">{question.question}</a>
                                                    </h4>
                                                </div>


                                                <div id={`${index}`} className="collapse in">
                                                    <form control="" noValidate className="form panel-body"
                                                        onSubmit={(e) => this.onSubmitAnswer(e, index, question._id)}
                                                    >
                                                        <div className="form-group col-md-11" style={{margin: "0px"}}>

                                                            <input
                                                                onChange={this.onChange}
                                                                value={this.state[`answer-${index}`] || ''}
                                                                id={`answer-${index}`}
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Put your answer here"
                                                            />
                                                        </div>
                                                        <button className="btn btn-danger btn-fill pull-right" type="submit">Send</button>
                                                    </form>
                                                    {question.answers.map((answer, i) => {
                                                        return (<p className="description-answear">{answer}</p>)
                                                    })}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>


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
    feedbacks: state.feedbacks,
    questions: state.questions,
    errors: state.errors
});

export default withRouter(
    connect(
        mapStateToProps,
        { getFeedbacksList, getQuestionsList, addQuestion, updateQuestion }
    )(Landing));
