import s from './Counters.module.scss'


import React from 'react';

const counters = {
    minutes: 3,
    workouts: 1,
    kgs: 5,
}

const Counters = () => {
    return (
        <div className={s.wrapper}>
            {Object.entries(counters).map(item => (
                <div className={s.count} key={'key' + item[0]} >
                    <div className={s.heading}>{item[0]}</div>
                    <div className={s.number}>{item[1]}</div>
                </div>
                ))}
        </div>

            );
            };

            export default Counters;