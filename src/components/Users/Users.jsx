import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/user-image.png';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render () {
        return(
            <div>
                {this.props.users.map(user => {
                    return(
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto} />
                                    <br/>
                                    {user.followed
                                        ? <button onClick={ () => {this.props.unfollowUser(user.id)}}>Unfollow</button>
                                        : <button onClick={ () => {this.props.followUser(user.id)}}>Follow</button>}
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
}

// const Users = (props) => {
//     let getUsers = () => {
//         if(props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 props.setUsers(response.data.items);
//             });
//         }
//     };
//
//     return(
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {props.users.map(user => {
//                 return(
//                     <div key={user.id}>
//                         <span>
//                             <div>
//                                 <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto} />
//                                 <br/>
//                                 {user.followed
//                                     ? <button onClick={ () => {props.unfollowUser(user.id)}}>Unfollow</button>
//                                     : <button onClick={ () => {props.followUser(user.id)}}>Follow</button>}
//                             </div>
//                         </span>
//                         <span>
//                             <span>
//                                 <div>{user.name}</div>
//                                 <div>{user.status}</div>
//                             </span>
//                             <span>
//                                 <div>{'user.location.country'}</div>
//                                 <div>{'user.location.city'}</div>
//                             </span>
//                         </span>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

export default Users;