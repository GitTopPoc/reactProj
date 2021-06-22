import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Profile from "./Profile/Profile";



const Content = () => {
    return (
      <div className={ms.block_container}>
          <div className={style.content_blocks}>
              <Profile/>
          </div>
      </div>
    )
}
export default Content;