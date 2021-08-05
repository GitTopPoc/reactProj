import React from "react";
import style from './style.module.css';
import ms from '../../mainStyles/ms.module.css';
import NavbarContainer from "./Navbar/NavbarContainer";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


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
                <div className={`${ms.block_container}`}>
                   <div className={` ${style.header_nav} ${this.state.showMenuClicked && style.show_clicked }`}>
                       <NavbarContainer store={this.props.store}/>
                       <div
                           className={`${style.logout_button}`}>
                           <button onClick={this.props.logout}>Logout</button>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {logout})(Header);