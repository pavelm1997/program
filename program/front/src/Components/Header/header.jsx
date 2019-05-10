import React from 'react';
import c from './header.module.css';
const Header = () => {
    return <header className= {c.header}>
        <img className={c.img} src='http://arenda-avtobusa.by/images/%D0%BB%D0%BE%D0%B3%D0%BE.svg?crc=136901531' />
    </header>
};

export default Header;