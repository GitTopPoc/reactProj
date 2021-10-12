import React from "react";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import Auth from "./Auth";

class AuthContainer extends React.Component {
    render() {
        return <>
            <Auth {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps, {login,logout})(AuthContainer);