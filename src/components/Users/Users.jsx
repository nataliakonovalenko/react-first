import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/user-image.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNummber) => {
        this.props.setCurrentPage(pageNummber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNummber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render () {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return(
            <div>
                <div>
                    {pages.map((el) => {
                            return (
                                <span onClick={ () => {this.onPageChanged(el)}} className={this.props.currentPage === el && s.selected}>{el}</span>
                            )
                        })
                    }
                </div>
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