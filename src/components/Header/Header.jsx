import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className={style.header_background}>
            <div className={`${ms.block_container} ${style.header_nav}`}>
                <div className={style.header_logo}>
                    <img width="50px" height="50px"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/768px-Xiaomi_logo_%282021-%29.svg.png"
                         alt="logo"/>
                    <p className={ms.regular_text}>Xiaomi</p>
                </div>
                <Navbar/>
            </div>
        </div>
    )
}
export default Header;