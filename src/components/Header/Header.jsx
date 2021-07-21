import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Navbar from "./Navbar/Navbar";
import {NavLink} from "react-router-dom";
import logo from "../../assets/image/logo.png";
const Header = () => {
    return (
        <div className={style.header_background}>
            <div className={`${ms.block_container} ${style.header_nav}`}>
                <div className={style.header_logo}>
                    <NavLink to="/profile" href="#"><img width="80px" height="50px"
                                     src={logo}
                                     alt="logo"/></NavLink>
                </div>
                <Navbar/>
            </div>
        </div>
    )
}
export default Header;