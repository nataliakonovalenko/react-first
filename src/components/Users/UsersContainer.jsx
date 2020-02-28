import React from 'react';
import {connect} from 'react-redux';
import {
    getUsersThunkCreator,
    setCurrentPage,
    unfollow,
    follow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render () {
        console.log('render');
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    console.log('mapStateToProp s Users');
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage:  getCurrentPage(state),
        isFetching:  getIsFetching(state),
        followingInProgress:  getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers: getUsersThunkCreator})
)(UsersContainer);