import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Profile from "./Profile/Profile";
import Messages from "../Messages/Messages";
import {Route} from "react-router-dom";


const Content = (props) => {
    return (
        <div className={ms.block_container}>
            <div className={style.content_blocks}>
                <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                <Route path='/messages' render={() => <Messages messages={props.state.messagePage}/>}/>
            </div>
        </div>
    )
}
export default Content;