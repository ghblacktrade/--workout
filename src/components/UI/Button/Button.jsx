import React from 'react';
import s from './Button.module.scss'

const Button = ({text, callback, type = 'main'}) => {
    return (
        <div className={s.wrapper}>
            <button onClick={callback} className={`${s.button} ${s[type]}`}>
                {text}
            </button>
        </div>
    );
};

export default Button;