import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "fcf5c30f-928d-495b-968a-73abb9732a8e"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUsersToFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    getUsersToUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    getProfileInfo(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfileInfo(userId);
    }
}

export const profileAPI ={
    getProfileInfo(userId) {
        return instance.get(`/profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI ={
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
    // setAuthMeInfo(userId) {
    //     return instance.get(`profile/${userId}`)
    //         .then(response => response.data);
    // }
}


// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data);
// };
//
// export const getUsersToFollow = (userId) => {
//     return instance.post(`follow/${userId}`)
//         .then(response => response.data);
// };
//
// export const getUsersToUnfollow = (userId) => {
//     return instance.delete(`follow/${userId}`)
//         .then(response => response.data);
// };
//
// export const getProfileInfo = (userId) => {
//     return instance.get(`/profile/${userId}`)
//         .then(response => response.data);
// };
//
// export const authMe = () => {
//     return instance.get(`auth/me`)
//         .then(response => response.data);
// };
//
// export const setAuthMeInfo = (userId) => {
//     return instance.get(`profile/${userId}`)
//         .then(response => response.data);
// };