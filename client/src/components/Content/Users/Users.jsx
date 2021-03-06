import React from "react";
import style from "./style.module.css";
import ms from "../../../mainStyles/ms.module.css";
import userPhoto from "../../../assets/image/default-image.jpg";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {API_URL} from "../../../config";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let minUsers = 0;
    let pages = [];
    if (pagesCount <= 10) {
        minUsers = pagesCount;
    }
    if (props.currentPage < 5) {
        for (let i = 1; i <= minUsers; i++) {
            pages.push(i);
        }
    } else {
        let start = props.currentPage - 3;
        let end = props.currentPage + 3;
        for (let i = start; i <= end; i++) {
            if (i >= pagesCount) {
                break
            } else pages.push(i);
        }
    }

    return <div className={ms.block_container}>
        <div className={style.pagination_block}>
            {
                props.currentPage >= 5 ?
                    <div className={style.pagination_start}><p className={`${style.page_button}`} onClick={() => {
                        props.onPageChanged(1);
                    }}>{1}</p> <span className={style.page_button}>...</span></div> : false

            }
            {pages.map(p => {
                return <p
                    className={`${props.currentPage === p ? style.active_page : false} ${style.page_button}`}
                    onClick={() => {
                        props.onPageChanged(p);
                    }}>{p}</p>
            })}
            {
                <div className={style.pagination_start}><span className={style.page_button}>...</span><p
                    className={`${props.currentPage === pagesCount ? style.active_page : false} ${style.page_button}`}
                    onClick={() => {
                        props.onPageChanged(pagesCount);
                    }}>{pagesCount}</p></div>
            }
        </div>
        {
            props.isFetching ? <Preloader/> : <div className={`${style.users_wrapper}`}>
                {
                    props.users.length > 0 && props.users.map(u => <div className={style.user_block} key={u.id}>
                            <div>

                                <NavLink to={'/profile/' + u.id}>
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img className={style.user_photo}
                                         src={u.photo !== "" ? `${API_URL}\\${u.photo}` : userPhoto}
                                         alt="no image"/>
                                </NavLink>
                                {props.userId !== u.id &&
                                <div className={style.user_block_follow_block}>
                                    {
                                        u.followed === true ?

                                            <button disabled={props.followingProcessing.some(id => id === u.id)}
                                                    className={`${style.user_block_follow_button} ${style.user_block_unfollow}`}
                                                    onClick={() => {props.unfollow(u.id);}}>Unfollow</button> :
                                            <button disabled={props.followingProcessing.some(id => id === u.id)}
                                                    className={`${style.user_block_follow_button} ${style.user_block_follow}`}
                                                    onClick={() => {props.follow(u.id);}}>Follow</button>
                                    }
                                </div>}
                            </div>
                            <div className={style.user_info_block}>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <p className={`${style.user_info_name}`}>{u.name}</p>
                                    </NavLink>
                                    <p className={style.user_info_status}>{u.status ? u.status : 'No status yet...'}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        }
    </div>

}

export default Users;
