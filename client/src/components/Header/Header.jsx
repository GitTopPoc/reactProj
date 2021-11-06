import React from "react";
import style from './style.module.css';
import ms from '../../mainStyles/ms.module.css';
import NavbarContainer from "./Navbar/NavbarContainer";
import {connect} from "react-redux";

import {getStateIsAuth} from "../../redux/auth-selector";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getStateProfile} from "../../redux/profile-selector";


class Header extends React.Component<{}> {


    render() {
        return (

            <div className={style.header_background}>
                    <div className={`${ms.block_container} ${style.nav_parental}`}>
                        <div className={`${style.header_nav}`}>
                            <NavbarContainer store={this.props.store}/>
                        </div>
                    </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth : getStateIsAuth(state),
        name: getStateProfile(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Header);