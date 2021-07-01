import React from "react";
import style from "./style.module.css";
import ms from "../../../../Main_styles/ms.module.css";

const Post = () => {
    return (
        <div className={style.posts_area}>
            <div className={style.post}>
                <div className={style.post_author}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/768px-Xiaomi_logo_%282021-%29.svg.png"
                        alt="ava"/>
                    <p className={ms.regular_text}>Dima Zabolotko</p>
                </div>
                <p className={style.post_text}>My first post!</p>
            </div>
        </div>
    )
}

export default Post;