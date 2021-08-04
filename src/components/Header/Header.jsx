import React from "react";
import style from './style.module.css';
import ms from '../../mainStyles/ms.module.css';
import NavbarContainer from "./Navbar/NavbarContainer";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const Header = (props) => {
    return (
        <div className={style.header_background}>
            <div className={`${ms.block_container} ${style.header_nav}`}>
                <NavbarContainer store={props.store}/>
                <button onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
}
export default connect( null, {logout})(Header);