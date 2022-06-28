import React from 'react';
import Header from "./Header/Header";
import s from './Layout.module.scss'
const Layout = ({ children }) => {
    return (
        <div className={s.wrapper}>
            <Header />
            {children}
        </div>
    );
};

export default Layout;