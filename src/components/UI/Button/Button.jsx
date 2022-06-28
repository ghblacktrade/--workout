import React from 'react';
import s from './Button.module.scss'

const Button = ({text, callback, style = 'main'}) => {
    return (
        <div>
            <button onClick={callback} className={s[style]}>
                {text}
            </button>
        </div>
    );
};

export default Button;