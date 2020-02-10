import {authAPI} from "../api/api";
//import userPhoto from "../assets/images/userPhoto.jpeg";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_PROFILE_USER_DATA = 'SET_PROFILE_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    userSmallPhoto: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_PROFILE_USER_DATA:
            return {
                ...state,
                userSmallPhoto: action.userSmallPhoto
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})
export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setProfileUserData = (userSmallPhoto) => ({type: SET_PROFILE_USER_DATA, userSmallPhoto})

export const getAuthUserData = () => {
    return (dispatch) => {

        dispatch(toggleFetching(true));
        authAPI.authMe().then(data => {
            dispatch(toggleFetching(false));
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
        //     .then(() => {
        //     usersAPI.setAuthMeInfo(this.props.userId).then(data => {
        //         let userSmallPhoto = data.photos.small;
        //         userSmallPhoto = userPhoto;
        //         this.props.setProfileUserData(userSmallPhoto);
        //     })
        // })
    }
}

export default authReducer;