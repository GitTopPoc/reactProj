import React from "react";
import style from './style.module.css';
import ms from '../../mainStyles/ms.module.css';
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import AuthContainer from "../Auth/AuthContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/app-reducer";
import Preloader from "../common/Preloader/Preloader";


class Content extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            <Preloader/>
        }
        return (<>
                <Route path='/auth' render={() => <AuthContainer/>}/>
                <div className={ms.block_container}>

                    <div className={style.content_blocks}>
                        <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <MessagesContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>

                    </div>

                </div>
            </>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(Content)
