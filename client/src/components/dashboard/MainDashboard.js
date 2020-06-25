import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import logoFII from "../../assets/img/FII-logo.PNG";

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
                <br />
                <br />




                <div class="card card-member">
                    <div class="obj-list">
                        <div class="alert alert-info text-center" style={{ margin: "0px" }}>
                            <h4> List of mandatory subjects</h4>
                            <hr />
                            <ul>
                                <li>
                                    Algoritmica Grafurilor (vezi fișa disciplinei
                                        <a href="https://profs.info.uaic.ro/~webdata/planuri/licenta/ro/CS2104.pdf"> aici </a>
                                    și pagina cursului
                                    <a href="https://profs.info.uaic.ro/~acf/ag/"> aici</a>)
                                </li>
                                <li>
                                    Arhitectura Calculatoarelor și Sisteme de Operare (vezi fișa disciplinei
                                    <a href="https://profs.info.uaic.ro/~webdata/planuri/licenta/ro/CS1102.pdf"> aici </a>
                                pagina cursului
                                <a href="https://profs.info.uaic.ro/~rvlad/stud.html"> aici</a>
                                )

                                </li>
                                <li>
                                    Baze de Date (vezi fișa disciplinei
                                    <a href="https://profs.info.uaic.ro/~bd/wiki/index.php/Pagina_principal%C4%83"> aici </a>
                                pagina cursului
                                <a href="https://profs.info.uaic.ro/~webdata/planuri/licenta/ro/CS2102.pdf"> aici </a>
                                )

                                </li>
                                <li>
                                    Calcul Numeric (vezi fișa disciplinei
                                    <a href="https://profs.info.uaic.ro/~webdata/planuri/licenta/ro/CS3207.pdf"> aici </a>
                                pagina cursului
                                <a href="https://profs.info.uaic.ro/~ancai/CN/"> aici </a>
                                )
                                </li>
                            </ul>
                            <hr />
                            <a href="http://absolvire.info.uaic.ro/" class="btn btn-info">Read Full List of Subjects</a>
                        </div>
                    </div>
                </div>


                <div class="card card-member " style={{ width: "60%" }}>
                    <div class="details-license">
                        <div class="alert alert-info text-center" style={{ margin: "0px" }}>
                            <h4> About License</h4>
                            <hr />
                            <img src={logoFII} />
                            <br />
                            <br />
                            <p>
                                Here is some information about elaboration of the license.
                            </p>
                            <hr />
                            <a href="http://absolvire.info.uaic.ro/" class="btn btn-info">Read Full Detalis</a>
                        </div>
                    </div>
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
