import React from 'react';
import Header from "./Header/Header";
import s from './Layout.module.scss'

const Layout = ({children, bgImage, }) => {
    return (
        <div className={s.wrapper}
             style={{ backgroundImage: `url(${bgImage})`}}
        >
            <Header/>
            <div>
                {children}
            </div>

        </div>
    );
};

export default Layout;