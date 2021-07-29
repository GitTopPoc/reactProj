import React from "react";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import Auth from "./Auth";
import {authAPI} from "../../api/api";

class AuthContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setUserData(id, email, login);

            }
        })
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

export default connect(mapStateToProps, {setUserData})(AuthContainer);