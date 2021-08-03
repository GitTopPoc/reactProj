import React from "react";
import style from './style.module.css';
import ms from '../../mainStyles/ms.module.css';
import NavbarContainer from "./Navbar/NavbarContainer";

const Header = (props) => {
    return (
        <div className={style.header_background}>
            <div className={`${ms.block_container} ${style.header_nav}`}>
                <NavbarContainer store={props.store}/>
            </div>
        </div>
    )
}
export default Header;