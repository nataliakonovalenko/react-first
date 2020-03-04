import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize} portionSize={portionSize}/>
            {props.users.map(user => <User user={user}
                                           key={user.id}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow}
                                           follow={props.follow} />
            )}
        </div>
    )
}

export default Users;