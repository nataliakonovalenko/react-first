import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((el) => {
                    return (
                        <span onClick={ () => {{props.onPageChanged(el)}}} className={props.currentPage === el && s.selected}>{el}</span>
                    )
                })
                }
            </div>
            {props.users.map(user => {
                return(
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto} />
                                </NavLink>
                                <br/>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                        props.toggleFollowingProgress(true, user.id);
                                        usersAPI.getUsersToUnfollow(user.id).then(data => {
                                            if(data.resultCode === 0) {
                                                props.unfollowUser(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                        props.toggleFollowingProgress(true, user.id);
                                        usersAPI.getUsersToFollow(user.id).then(data => {
                                            if(data.resultCode === 0) {
                                                props.followUser(user.id);
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;