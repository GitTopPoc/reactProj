import React from "react";
import style from './style.module.css';
import ms from '../../Main_styles/ms.module.css';
import Posts from "./Posts/Posts";


const Profile = () => {
    return (
        <div className={`${ms.block_container}`}>
            <div>
                <div className={style.profile_picture}>
                    <div className={style.profile_background}>
                        <img src="https://www.worldphoto.org/sites/default/files/Christian%20Schipflinger%2C%20Austria%2C%20Commended%2C%20Open%2C%20Panoramic%2C%202015%20Sony%20World%20Photography%20Awards.jpg" alt="profile background"/>
                    </div>

                    <div className={style.profile_name}>
                        <p className={`${ms.regular_text} ${style.profile_name}`}>Ava+Name</p>
                    </div>
                </div>
                <div className={style.profile}>
                    <div className={style.profile_info}>
                        <div>
                            <p className={style.profile_info_text}>Date of birth: 05.07.2001</p>
                            <p className={style.profile_info_text}>City: Kyiv</p>
                        </div>
                        <div>
                            <p className={style.profile_info_text}>Education: NULES</p>
                            <p className={style.profile_info_text}>Profession: React Front-End Developer</p>
                        </div>
                    </div>

                    <Posts/>
                </div>
            </div>
        </div>
    )
}
export default Profile;