import {createSelector} from "reselect";

const getUsersSElector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSElector, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getPortionSize = (state) => {
    return state.usersPage.portionSize;
}

export const getTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
