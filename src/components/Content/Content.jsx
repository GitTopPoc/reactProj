import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";



const Content = (props) => {
    return (
        <div className={ms.block_container}>

            <div className={style.content_blocks}>
                <Route path='/profile/:userId' render={() => <ProfileContainer store={props.store} dispatch={props.dispatch}/>}/>
                <Route path='/messages' render={() => <Messages store={props.store} dispatch={props.dispatch}/>}/>
                <Route path='/users' render={()=> <UsersContainer store={props.store} dispatch={props.dispatch}/>}/>
            </div>

        </div>
    )
}
export default Content;