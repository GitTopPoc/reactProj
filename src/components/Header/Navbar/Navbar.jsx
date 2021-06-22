import React from "react";
import style from './style.module.css';
import ms from '../../Main_styles/ms.module.css';
const Navbar = () => {
    return (
        <div className={ms.block_container}>
           <div className={style.header_links_block}>
               <ul>
                   <li><a href="#"><p className={ms.regular_text}>Profile</p></a></li>
                   <li><a href="#"><p className={ms.regular_text}>Messages</p></a></li>
                   <li><a href="#"><p className={ms.regular_text}>News</p></a></li>
                   <li><a href="#"><p className={ms.regular_text}>Music</p></a></li>
                   <li><a href="#"><p className={ms.regular_text}>Settings</p></a></li>
               </ul>
           </div>
        </div>
    )
}
export default Navbar;