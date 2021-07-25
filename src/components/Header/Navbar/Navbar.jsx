import React from "react";
import style from './style.module.css';
import ms from '../../Main_styles/ms.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className={ms.block_container}>
           <div className={style.header_links_block}>
               <ul>
                   <li><NavLink activeClassName={style.active} to="/profile"><p className={ms.regular_text}>Profile</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/messages"><p className={ms.regular_text}>Messages</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/users"><p className={ms.regular_text}>Users</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/News"><p className={ms.regular_text}>News</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/Music"><p className={ms.regular_text}>Music</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/Settings"><p className={ms.regular_text}>Settings</p></NavLink></li>
               </ul>
           </div>
        </div>
    )
}
export default Navbar;