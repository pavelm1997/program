import React from 'react';
import c from './navbar.module.css';
import {NavLink} from "react-router-dom";
let Navbar = () => {
    return ( <nav className = {c.nav}>
        <div className={c.item}>
            <NavLink to='/main' activeClassName={c.active}> Головна</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to='/schedule' activeClassName={c.active}> Розклад</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to='/search' activeClassName={c.active}> Пошук</NavLink>
        </div>
    </nav>);};
export default Navbar;