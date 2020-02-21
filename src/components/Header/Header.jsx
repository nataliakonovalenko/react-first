import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {

    return(
        <header className={s.header}>
            <img src="https://images.squarespace-cdn.com/content/v1/577aaad8e3df28197022a5b8/1571068972542-4UBPD7HPWTXO3W6Z782W/ke17ZwdGBToddI8pDm48kIu5dX6jHtt0fWOuxZqALHwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxjj09-ksnEt8EY31WSt-3Y8tMzzwSNXhn0knmK2ulfuW0aMGzKRJer0EdzUtnLrw/I%27m+So+Yoga+Logo" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth 
                    ? <>
                        <div>{props.login}</div>
                        <img src={props.userSmallPhoto} alt=""/>
                        <button onClick={props.logout}>Logout</button>
                    </>
                    : <>
                        <NavLink to='/login'>Login</NavLink>
                    </>
                }
            </div>
        </header>
    )
}

export default Header;