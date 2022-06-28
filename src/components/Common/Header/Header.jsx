import React from 'react';
import s from './Header.module.scss'
import imgUser from '../../img/Header/user.svg'
import imgHum from '../../img/Header/humburger.svg'

const Header = () => {
    return (
        <header className={s.header}>

            <button type='button'>
                <img src={imgUser} alt='Auth'/>
            </button>
            <button type='button'>

                <img src={imgHum} alt='Auth'/>
            </button>

        </header>
    );
};

export default Header;