import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return(
        <div className={s.friend}>
            <div className={s.name}>{props.name}</div>
            <div className={s.lastName}>{props.lastName}</div>
        </div>
    )
}

export default Friend;