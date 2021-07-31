import React from "react";
import {connect} from "react-redux";
import {authorize} from "../../redux/auth-reducer";
import Auth from "./Auth";


class AuthContainer extends React.Component {
    componentDidMount() {
       this.props.authorize();
    }

    render() {
        return <>
            <Auth {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    state: state
})

export default connect(mapStateToProps, {authorize})(AuthContainer);