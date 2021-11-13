import React from "react";
import {compose} from "redux";
import {NavLink, Route, withRouter} from "react-router-dom";
import style from "./style.module.css"
import ms from "../../mainStyles/ms.module.css"
import userPhoto from "../../assets/image/default-image.jpg";
import Preloader from "../common/Preloader/Preloader";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock, faCog, faPortrait} from '@fortawesome/free-solid-svg-icons'
import PersonalData from "./SettingsForms/PersonalData"
import Password from "./SettingsForms/Password";
import Photo from "./SettingsForms/Photo";
import {API_URL} from "../../config";

const Settings = (props) => {
    return (
        <div className={ms.block_container}>
            <div>
                {props.state.auth.isAuth === true ?
                    <div className={style.main_wrapper}>
                        <div className={style.settings_fields_wrapper}>
                            <div className={style.photo_wrapper}>
                                <img className={style.current_avatar}
                                    src={props.state.settings.photo === "" ? userPhoto : `${API_URL + props.state.settings.photo}`}
                                    alt="not found"/>
                            </div>
                            <NavLink to={'/settings/'}>
                                <div
                                    className={`${style.settings_tab} ${window.location.href === "http://localhost:3000/settings" && style.active_tab} ${window.location.href === "http://localhost:3000/settings/" && style.active_tab}`}>
                                    <div className={style.descr_wrapper}>
                                        <div className={style.tab_descr}>
                                            <span><FontAwesomeIcon icon={faCog}/></span><p>Personal Data</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={'/settings/password'}>
                                <div
                                    className={`${style.settings_tab} ${window.location.href === "http://localhost:3000/settings/password" && style.active_tab}`}>
                                    <div className={style.descr_wrapper}>
                                        <div className={style.tab_descr}>
                                            <span><FontAwesomeIcon icon={faLock}/></span> <p>Password</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to={'/settings/photo'}>
                                <div
                                    className={`${style.settings_tab} ${window.location.href === "http://localhost:3000/settings/photo" && style.active_tab}`}>
                                    <div className={style.descr_wrapper}>
                                        <div className={style.tab_descr}>
                                            <span><FontAwesomeIcon icon={faPortrait}/></span> <p>Photo</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                        </div>
                        <div className={style.settings_forms_wrapper}>
                            {props.state.settings.name !== null ? <>
                                    <Route exact path={'/settings'}
                                           render={() => <PersonalData setResultMessage={props.setResultMessage}
                                                                       updateProfileInfo={props.updateProfileInfo}
                                                                       state={props.state}/>}/>
                                    <Route exact path={'/settings/password'}
                                           render={() => <Password state={props.state} changePassword={props.changePassword}
                                                                   setPasswordChangeError={props.setPasswordChangeError}
                                                                   setPasswordChangeMessage={props.setPasswordChangeMessage}/>}/>
                                    <Route exact path={'/settings/photo'}
                                           render={() => <Photo state={props.state}
                                                                setAvatarChangeError={props.setAvatarChangeError}
                                                                setAvatarChangeMessage={props.setAvatarChangeMessage}
                                                                deleteAvatar={props.removeAvatar}
                                                                uploadAvatar={props.uploadAvatar}/>}/></> :
                                <Preloader/>}
                        </div>
                    </div>
                    : <Preloader/>}
            </div>
        </div>
    );
}

export default compose(withRouter)(Settings);