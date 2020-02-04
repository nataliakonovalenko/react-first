import React from 'react';
import {connect} from 'react-redux';
import {
    followUser,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFetching,
    unfollowUser
} from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render () {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollowUser={this.props.unfollowUser}
                   followUser={this.props.followUser}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollowUser: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPageNumber) => {
//             dispatch(setCurrentPageAC(currentPageNumber));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         toggleFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps,
    { followUser, unfollowUser, setUsers, setCurrentPage, setTotalCount, toggleFetching})(UsersContainer);