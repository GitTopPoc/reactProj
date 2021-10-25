import React from "react";
import style from './style.module.css';
import ms from '../../mainStyles/ms.module.css';
import NavbarContainer from "./Navbar/NavbarContainer";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {getStateIsAuth} from "../../redux/auth-selector";
import {NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getStateProfile} from "../../redux/profile-selector";


class Header extends React.Component<{}> {
    state = {
        showMenuClicked: true
    }
    showMenu = () => {
        this.state.showMenuClicked
            ? this.setState({showMenuClicked: false})
            : this.setState({showMenuClicked: true})
    }


    render() {
        return (

            <div className={style.header_background}>
                <div className={style.show_menu_button}>
                    <button onClick={this.showMenu}>Show menu</button>
                </div>

                    <div className={`${ms.block_container} ${style.nav_parental}`}>
                        <div onScroll={this.showMenu} className={`${style.header_nav} ${this.state.showMenuClicked && style.show_clicked }`}>
                            <NavbarContainer store={this.props.store}/>
                            {this.props.isAuth ? <div className={`${style.logout_button}`}>
                                <button onClick={this.props.logout}>Logout</button>
                            </div> : <div className={style.auth_buttons}>
                                <div  className={`${style.logout_button}`}> <NavLink to={'/auth'}>Login</NavLink></div>
                                <div  className={`${style.logout_button}`}> <NavLink to={'/register'}>Register</NavLink></div>
                            </div>}
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
    connect(mapStateToProps, {logout})
)(Header);