import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <a href="/">
            <img src='https://cdn-icons.flaticon.com/png/512/719/premium/719731.png?token=exp=1640026407~hmac=7bb9ade3b498d8a3d76ff217fd96a3fc'
            alt='logo'
            />
        </a>

    </header>
}

export default Header;

