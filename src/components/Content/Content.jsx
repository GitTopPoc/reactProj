import React from "react";
import style from './style.module.css';
import ms from '../../mainStyles/ms.module.css';
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import AuthContainer from "../Auth/AuthContainer";
import MessagesContainer from "./Messages/MessagesContainer";



const Content = () => {
    return (
        <div className={ms.block_container}>

            <div className={style.content_blocks}>
                <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/users' render={()=> <UsersContainer/>}/>
                <Route path='/login' render={() => <AuthContainer/>}/>
            </div>

        </div>
    )
}
export default Content;