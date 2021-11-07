import React, {useState} from "react";
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

const Settings = (props) => {
    /*const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => alert(JSON.stringify(data));*/
    const [activeTab, setActiveTab] = useState("personal-data");
    let changeactive = (data) => {
        setActiveTab(data)
    }

    return (
        <div className={ms.block_container}>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={props.state.settings.name} {...register("example")} />
              <input {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" />
          </form>*/}

            <div>
                {props.state.auth.isAuth === true ?
                    <div className={style.main_wrapper}>
                        <div className={style.settings_fields_wrapper}>
                            <div className={style.photo_wrapper}>
                                <img src={props.state.settings.photo === "" ? userPhoto : props.state.settings.photo}
                                     alt="not found"/>
                            </div>
                            <NavLink to={'/settings/'}>
                                <div onClick={() => changeactive("personal-data")}
                                     className={`${style.settings_tab} ${activeTab === "personal-data" && style.active_tab}`}>
                                    <div className={style.descr_wrapper}>
                                        <div className={style.tab_descr}>
                                            <span><FontAwesomeIcon icon={faCog}/></span><p>Personal Data</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={'/settings/password'}>
                                <div onClick={() => changeactive("password")}
                                     className={`${style.settings_tab} ${activeTab === "password" && style.active_tab}`}>
                                    <div className={style.descr_wrapper}>
                                        <div className={style.tab_descr}>
                                            <span><FontAwesomeIcon icon={faLock}/></span> <p>Password</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to={'/settings/photo'}>
                                <div onClick={() => changeactive("photo")}
                                     className={`${style.settings_tab} ${activeTab === "photo" && style.active_tab}`}>
                                    <div className={style.descr_wrapper}>
                                        <div className={style.tab_descr}>
                                            <span><FontAwesomeIcon icon={faPortrait}/></span> <p>Photo</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                        </div>
                        <div className={style.settings_forms_wrapper}>
                            <Route exact path={'/settings'} render={() => <PersonalData/>}/>
                            <Route exact path={'/settings/password'} render={() => <Password/>}/>
                            <Route exact path={'/settings/photo'} render={() => <Photo/>}/>
                        </div>
                    </div>


                    : <Preloader/>}
            </div>

        </div>
    );
}

export default compose(withRouter)(Settings);