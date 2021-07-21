import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";


const Content = (props) => {
    return (
        <div className={ms.block_container}>
            <div className={style.content_blocks}>
                <Route path='/profile' render={() => <Profile store={props.store} dispatch={props.dispatch}/>}/>
                <Route path='/messages' render={() => <Messages store={props.store} dispatch={props.dispatch}/>}/>
                <Route path='/users' render={()=> <UsersContainer store={props.store} dispatch={props.dispatch}/>}/>
            </div>
        </div>
    )
}
export default Content;