import React, { Component } from 'react'
import "../../assets/css/bootstrap.css";
import "../../assets/css/homePage.css";
// import 'font-awesome/css/font-awesome.min.css';
import "../../../node_modules/font-awesome/css/font-awesome.min.css"
// import FontAwesome from 'react-fontawesome/font-awesome/css/font-awesome.min.css';

import imageBackground1 from "../../assets/img/teacher-and-student.jpg";
import imageBackground2 from "../../assets/img/header-3.jpg";
import face1 from "../../assets/img/faces/face_1.jpg";
import face2 from "../../assets/img/faces/face_2.jpg";
import face3 from "../../assets/img/faces/face_3.jpg";
import Navbar from './Navbar';

class Landing extends Component {
    render() {
        return (
            <>
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
                                                <h3>Probably the most useful site for organizing licenses!</h3>
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
                                            <i className="pe-7s-graph1"></i>
                                        </div>
                                        <h3>Sales</h3>
                                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into
                        your clothes.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        <div className="icon text-danger">
                                            <i className="pe-7s-note2"></i>
                                        </div>
                                        <h3>Content</h3>
                                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we
                        provide..</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="info-icon">
                                        {/* <div className="icon text-danger"> */}
                                        <div>
                                            {/* <i className="pe-7s-music"></i> */}
                                            <i className="fas fa-music"></i>
                                        </div>

                                        <h3>Music</h3>
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
                                            <h2>Who We Are</h2>
                                            <div className="separator separator-danger">✻</div>
                                            <p className="description">We are a team that has thought of making your life easier when it
                            comes to preparing the license and presenting it.</p>
                                        </div>
                                    </div>

                                    <div className="team">
                                        <div className="row">
                                            <div className="col-md-10 col-md-offset-1">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="card card-member">
                                                            <div className="content">
                                                                <div className="avatar avatar-danger">
                                                                    {/* <img alt="..." className="img-circle"
                                                                        src= "../../assets/img/faces/face_1.jpg" /> */}
                                                                    <img src={face1} />;

                                                                </div>
                                                                <div className="description">
                                                                    <h3 className="title">Tina</h3>
                                                                    <p className="small-text">CEO / Co-Founder</p>
                                                                    <p className="description">I miss the old Kanye I gotta say at that time
                                                                    I’d like to meet Kanye And I promise the power is in the people
                                                                    and I will use the power given by the people to bring everything
                                                    I have back to the people.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card card-member">
                                                            <div className="content">
                                                                <div className="avatar avatar-danger">
                                                                    {/* <img alt="..." className="img-circle"
                                                                        src="assets/img/faces/face_4.jpg" /> */}
                                                                    <img src={face2} />;
                                                                </div>
                                                                <div className="description">
                                                                    <h3 className="title">Andrew</h3>
                                                                    <p className="small-text">Product Designer</p>
                                                                    <p className="description">I miss the old Kanye I gotta say at that time
                                                                    I’d like to meet Kanye And I promise the power is in the people
                                                                    and I will use the power given by the people to bring everything
                                                    I have back to the people.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card card-member">
                                                            <div className="content">
                                                                <div className="avatar avatar-danger">
                                                                    {/* <img alt="..." className="img-circle"
                                                                        src="assets/img/faces/face_3.jpg" /> */}
                                                                    <img src={face3} />;
                                                                </div>
                                                                <div className="description">
                                                                    <h3 className="title">Michelle</h3>
                                                                    <p className="small-text">Marketing Hacker</p>
                                                                    <p className="description">I miss the old Kanye I gotta say at that time
                                                                    I’d like to meet Kanye And I promise the power is in the people
                                                                    and I will use the power given by the people to bring everything
                                                    I have back to the people.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
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
                                    <h2 className="text-black">Do you want to contact us?</h2>
                                    <div className="separator separator-danger">♦</div>
                                    <p className="description"> If you have any questions or problems about this site, do not hesitate to
                                    contact us. We will
                    answer you as soon as possible.</p>
                                </div>

                                <div className="button-get-started">
                                    <a href="#" className="btn btn-danger btn-fill btn-lg">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- <footer className="footer" data-color="black"> --> */}
                    <footer className="footer">
                        <div className="container">
                            {/* <hr> */}
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

export default Landing;
