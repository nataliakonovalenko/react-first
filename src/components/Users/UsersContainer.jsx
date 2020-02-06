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
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
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