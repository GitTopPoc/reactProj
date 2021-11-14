import React, {useEffect, useState} from "react";
import style from './style.module.css';
import ms from '../../../mainStyles/ms.module.css';
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/image/default-image.jpg";
import ProfileStatus from "./ProfileStatus";
import {API_URL} from "../../../config";
import instaLogo from "../../../assets/image/instagram.png"
import githubLogo from "../../../assets/image/github.png"
import facebookLogo from "../../../assets/image/facebook.png"
import linkedinLogo from "../../../assets/image/linkedin.png"

const Profile = (props) => {
    let [socialLinks, setSocialLinks] = useState(false)
    useEffect(() => {
        if (props.profile && props.profile.contacts.github === "" && props.profile.contacts.facebook === "" && props.profile.contacts.linkedin === "" && props.profile.contacts.instagram === "") {
            setSocialLinks(false)
        } else setSocialLinks(true)
    }, [props.profile]);

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={`${ms.block_container}`}>
            <div>
                <div className={style.profile_picture}>
                    <div className={style.profile_main_info}>
                        <img className={style.profile_photo}
                             src={props.profile.photo === "" ? userPhoto : `${API_URL + props.profile.photo}`}
                             alt="not found"/>
                        <div className={style.name_status_block}>
                            <p className={`${ms.regular_text} ${style.profile_name_text}`}>{props.profile.fullName}</p>
                            <ProfileStatus userId={props.userId} status={props.status}
                                           updateUserStatus={props.updateUserStatus}/>
                        </div>
                    </div>
                </div>
                <div className={style.profile}>
                    {socialLinks === true &&
                    <div className={`${style.info_blocks}`}>
                        <p className={style.social_links_text}>Social links</p>
                        <div className={style.profile_info}>
                            {props.profile.contacts.github &&
                            <a target={"_blank"} href={props.profile.contacts.github}> <img className={style.contact_image}
                                                                          src={`${githubLogo}`} alt="not found"/></a>}
                            {props.profile.contacts.facebook &&
                            <a target={"_blank"} href={props.profile.contacts.facebook}> <img className={style.contact_image}
                                                                            src={`${facebookLogo}`}
                                                                            alt="not found"/></a>}
                            {props.profile.contacts.linkedin &&
                            <a target={"_blank"} href={props.profile.contacts.linkedin}><img className={style.contact_image} src={`${linkedinLogo}`} alt="not found"/></a>}
                            {props.profile.contacts.instagram &&
                            <a target={"_blank"} href={props.profile.contacts.instagram}><img className={style.contact_image} src={`${instaLogo}`} alt="not found"/></a>}
                        </div>

                    </div>}

                    <PostsContainer/>
                </div>
            </div>
        </div>
    )
}


export default Profile;