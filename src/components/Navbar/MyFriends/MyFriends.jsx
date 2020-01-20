import React from 'react';
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {

    let friendElements = props.friend.map( el => <Friend name={el.name} lastName={el.lastName} /> );

    return(
        <div className={s.friendsList}>
            { friendElements }
        </div>
    )
}

export default MyFriends;