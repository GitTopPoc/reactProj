import React from "react";
import style from './style.module.css';
import ms from '../../../mainStyles/ms.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (

        <div className={`${ms.block_container}`}>
           <div className={`${style.header_links_block} `}>
               <ul>
                   <li><NavLink activeClassName={style.active} to={'/profile/' + props.state.auth.userId}><p className={ms.regular_text}>Profile</p></NavLink></li>
                   {props.isAuth && <li><NavLink activeClassName={style.active} to="/messages/none"><p className={ms.regular_text}>Messages</p></NavLink></li>}
                   <li><NavLink activeClassName={style.active} to="/users"><p className={ms.regular_text}>Users</p></NavLink></li>
                   <li><NavLink activeClassName={style.active} to="/News"><p className={ms.regular_text}>News</p></NavLink></li>
                   {props.isAuth && <li><NavLink activeClassName={style.active} to="/settings"><p className={ms.regular_text}>Settings</p></NavLink></li>}
                   {props.isAuth ? <li>  <div className={`${style.logout_button}`}>
                       <button onClick={props.logout}>Logout</button>
                   </div></li> : <li><div className={style.auth_buttons}>
                       <div  className={`${style.logout_button}`}> <NavLink to={'/auth'}>Login</NavLink></div>
                       <div  className={`${style.logout_button}`}> <NavLink to={'/register'}>Register</NavLink></div>
                   </div></li>}
               </ul>

           </div>

        </div>

    )
}
export default Navbar;