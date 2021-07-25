import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Navbar from "./Navbar/Navbar";
const Header = () => {
    return (
        <div className={style.header_background}>
            <div className={`${ms.block_container} ${style.header_nav}`}>
                <Navbar/>
            </div>
        </div>
    )
}
export default Header;