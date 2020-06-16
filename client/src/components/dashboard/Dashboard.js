import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Dashboard.css'
import { getStudentList } from "../../actions/studentActions";


class Dashboard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         students: []
    //     };
    // }

    static propTypes = {
        getStudentList: PropTypes.func.isRequired,
        student: PropTypes.object.isRequired,
        // userrrrrr: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getStudentList();
    }

    render() {
        // const { users } = this.props.auth.user;
        const { students } = this.props.student;
        // const { user } = this.props.getStudentList;
        return (
            <>
            {/* <p>{users.name}</p>
            <p>Papuci</p> */}
                {/* {users.user.map((e, index) =>
                    <li key={index}>
                        {e.id}
                    </li>
                )} */}
                {students.map((studentt, index) =>
                    <li key={index}>
                        {studentt.id}
                    </li>
                )}
                {/* {students.map(({ id }) => (
                    <p>{{ id }}</p>
                ))
                } */}
                <div className="container dashboard">
                    {/* <Fragment> */}
                    <table
                        className='table table-bordered'
                        id='dataTable'
                        style={{ width: '100%' }}
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* {students.map(({student}) => (
                                    <li key={_id}>
                                       "Ceva"</li>
                                ))} */}
                                {/* {students.map(({ _id }) => ( */}
                                <>
                                    {/* <td key={_id}></td> */}
                                    {/* <td>{name}</td>
                                    <td>{email}</td> */}
                                    {/* // <li key={_id}> */}
                                    {/* // "Ceva"</li> */}
                                </>
                                {/* )) */}
                                {/* } */}
                            </tr>

                            {/* {students.map((data, _id) => (
                                <tr key={_id}>
                                    <td>{_id + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                </tr>

                            ))} */}
                        </tbody>
                    </table>
                    {/* </Fragment> */}
                </div>

                {/* <div>
                    <ul>
                        {
                            this.state.data.map(getStudentList

                            user = this.state.data.map( users => {

                                console.log("cevaaaaaa");
                                return <li>Test</li>
                            })
                            this.state.data.map((user,_id) => <li key={_id}>Test</li>)
                        }
                    </ul>
                </div> */}


                {/* <div className="container dashboard">
                    <MDBTable striped>
                        <MDBTableHead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div> */}
            </>
        );
    }
}




const mapStateToProps = (state) => ({
    student: state.student,
    // students: getStudents(state)

    // auth: state.auth
});

export default connect(
    mapStateToProps,
    { getStudentList }
)(withRouter(Dashboard));