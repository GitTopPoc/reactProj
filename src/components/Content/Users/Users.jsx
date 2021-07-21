import React from "react";
import * as axios from "axios";
import style from "./style.module.css";
import ms from "../../Main_styles/ms.module.css";
import userPhoto from "../../../assets/image/default-image.jpg";

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        })
    }

    return <div className={`${style.users_wrapper} ${ms.block_container}`}>
        {
            props.users.map(u => <div className={style.user_block} key={u.id}>
                    <div>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img className={style.user_photo} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="no image"/>
                        <div className={style.user_block_follow_block}>
                            {
                                u.followed ? <button className={`${style.user_block_follow_button} ${style.user_block_unfollow}`}
                                                     onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                    <button className={`${style.user_block_follow_button} ${style.user_block_follow}`}
                                            onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={style.user_info_block}>
                        <div>
                            <p className={`${style.user_info_name}`}>{u.name}</p>
                            <p className={style.user_info_status}>{u.status ? u.status : 'No status yet...'}</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}


export default Users;