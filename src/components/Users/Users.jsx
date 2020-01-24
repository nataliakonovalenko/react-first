import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE3woC4J8bqYQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=VLUj-SWSIuhKmwBces23qnIji2RHNA7Ve8FLtbXugTo', followed: false, name: 'Paul', status: 'I am so pretty', location: { city: 'Kharkiv', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE3woC4J8bqYQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=VLUj-SWSIuhKmwBces23qnIji2RHNA7Ve8FLtbXugTo', followed: false, name: 'Svetlana', status: 'I am looking for a new dress', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE3woC4J8bqYQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=VLUj-SWSIuhKmwBces23qnIji2RHNA7Ve8FLtbXugTo', followed: true, name: 'Sergei', status: 'I like football!!', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 4, photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE3woC4J8bqYQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=VLUj-SWSIuhKmwBces23qnIji2RHNA7Ve8FLtbXugTo', followed: true, name: 'Mary', status: 'I am happy!', location: {city: 'Paris', country: 'France'}}
        ])
    }

    return(
        <div>
            {props.users.map(user => {
                return(
                    <div key={user.id}>
                        <span>
                            <div>
                                <img className={s.userPhoto} src={user.photoUrl} />
                                <br/>
                                {user.followed
                                    ? <button onClick={ () => {props.unfollowUser(user.id)}}>Unfollow</button>
                                    : <button onClick={ () => {props.followUser(user.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;