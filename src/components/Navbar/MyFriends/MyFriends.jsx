import React from 'react';
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {

    let friendElements = props.friends.map( el => <Friend name={el.name} key={el.id} lastName={el.lastName} /> );

    return(
        <div className={s.friendsList}>
            { friendElements }
        </div>
    )
}

export default MyFriends;