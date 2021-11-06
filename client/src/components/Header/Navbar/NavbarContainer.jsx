import React from "react";
import {connect} from "react-redux";
import {logout, setUserData} from "../../../redux/auth-reducer";
import Navbar from "./Navbar";
import {getStateIsAuth} from "../../../redux/auth-selector";
import {getStateProfile} from "../../../redux/profile-selector";
class NavbarContainer extends React.Component{
    componentDidMount() {


    }

    render() {
        return <>
            <Navbar{...this.props}/>
        </>
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.userId,
    state:state,
    isAuth : getStateIsAuth(state),
    name: getStateProfile(state),
    logout: logout(state),

})

export default connect (mapStateToProps,{setUserData, logout}) (NavbarContainer);