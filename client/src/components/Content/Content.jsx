import React, {useEffect} from "react";
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
import RegisterContainer from "../Register/RegisterContainer";
import SettingsContainer from "../Settings/SettingsContainer";


const Content = (props) => {
    useEffect(() => {
        props.initializeApp();
    }, [props.initialized])

   if (props.initialized) {
       return <>
           <Route path='/auth' render={() => <AuthContainer/>}/>
           <Route path='/register' render={() => <RegisterContainer/>}/>
           <div className={ms.block_container}>
               <div className={style.content_blocks}>
                   <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
                   <Route path='/messages' render={() => <MessagesContainer/>}/>
                   <Route path='/users' render={() => <UsersContainer/>}/>
                   <Route path='/settings' render={() => <SettingsContainer/>}/>
               </div>
           </div>

       </>
   } else return <Preloader/>
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(Content)
