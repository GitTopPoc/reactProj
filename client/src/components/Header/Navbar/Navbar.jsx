import React from "react";
import style from './style.module.css';
import ms from '../../../mainStyles/ms.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (

        <div className={`${ms.block_container} ${style.header_elements}`}>
           <div className={`${style.header_links_block} `}>
               <ul>
                   <li><NavLink activeClassName={style.active} to={'/profile/' + props.state.auth.userId}><p className={ms.regular_text}>Profile</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/messages"><p className={ms.regular_text}>Messages</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/users"><p className={ms.regular_text}>Users</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/News"><p className={ms.regular_text}>News</p></NavLink></li>

               </ul>

           </div>

        </div>

    )
}
export default Navbar;