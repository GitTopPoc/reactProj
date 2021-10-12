import React from "react";
import {connect} from "react-redux";
import {setUserData} from "../../../redux/auth-reducer";
import Navbar from "./Navbar";
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
    state:state
})

export default connect (mapStateToProps,{setUserData}) (NavbarContainer);