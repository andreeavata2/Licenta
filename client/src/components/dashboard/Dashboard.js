import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
// import { getStudentList } from './../../actions/studentActions';


class Dashboard extends Component {
    // E PT LOGOUT
    // onLogoutClick = e => {
    //     e.preventDefault();
    //     this.props.logoutUser();
    // };

    // componentDidMount(){
    //     this.props.getStudentList.isRequired();
    // }

    render() {
        // const { user } = this.props.getStudentList;
        return (
            <>
                <div>
                    <ul>
                        {
                            // this.state.data.map(getStudentList)

                            // user = this.state.data.map( users => {

                            //     console.log("cevaaaaaa");
                            //     return <li>Test</li>
                            // })
                            // this.state.data.map((user,_id) => <li key={_id}>Test</li>)
                        }
                    </ul>
                </div>
                <MDBTable striped>
                    <MDBTableHead>
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </>
        );
    }
}

// Dashboard.propTypes = {
//     auth: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {  }
)(Dashboard);