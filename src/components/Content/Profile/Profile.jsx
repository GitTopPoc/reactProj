import React from "react";
import style from './style.module.css';
import ms from '../../Main_styles/ms.module.css';

const Profile = () => {
    return (
        <div className={ms.block_container}>
            <div className={style.content_blocks}>
                <div className={style.profile_picture}>
                    <p className={`${ms.regular_text} ${style.profile_name}`}>Ava+Name</p>
                </div>
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
            </div>
        </div>
    )
}
export default Profile;