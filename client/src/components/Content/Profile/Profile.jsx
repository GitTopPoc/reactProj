import React from "react";
import style from './style.module.css';
import ms from '../../../mainStyles/ms.module.css';
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/image/default-image.jpg";
import ProfileStatus from "./ProfileStatus";

const Profile = (props) => {
     if (!props.profile) {
         return <Preloader/>
     }


    return (
        <div className={`${ms.block_container}`}>
            <div>
                <div className={style.profile_picture}>
                    <div className={style.profile_background}>
                        <img src="https://www.worldphoto.org/sites/default/files/Christian%20Schipflinger%2C%20Austria%2C%20Commended%2C%20Open%2C%20Panoramic%2C%202015%20Sony%20World%20Photography%20Awards.jpg" alt="profile background"/>
                    </div>

                    <div className={style.profile_main_info}>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img className={style.profile_photo} src={props.profile.photo === "" ? userPhoto : props.profile.photo} alt="no photo"/>

                    </div>
                </div>
                <div className={style.profile}>
                    <div className={style.name_status_block}>
                        <p className={`${ms.regular_text} ${style.profile_name_text}`}>{props.profile.fullName}</p>
                        <ProfileStatus userId={props.userId} status={props.status} updateUserStatus={props.updateUserStatus}/>
                    </div>
                    <div className={style.info_blocks}>
                        <div className={style.profile_info}>
                            <p className={style.profile_info_text}>Job description: {!props.profile.lookingForAJobDescription ? 'No description' : props.profile.lookingForAJobDescription}</p>
                            <p className={style.profile_info_text}>Looking for a job: {props.profile.lookingForAJob ? 'Yes': 'No'}</p>
                        </div>
                        <div className={style.profile_info}>
                            <p className={style.profile_info_text}>Instagram: {!props.profile.contacts.instagram ? 'No instagram' : props.profile.contacts.instagram}</p>
                            <p className={style.profile_info_text}>Facebook: {!props.profile.contacts.facebook ? 'No facebook' : props.profile.contacts.instagram}</p>
                            <p className={style.profile_info_text}>Twitter: {!props.profile.contacts.twitter ? 'No twitter' : props.profile.contacts.twitter}</p>
                        </div>
                    </div>

                    <PostsContainer/>
                </div>
            </div>
        </div>
    )
}


export default Profile;