import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
//import userPhoto from "../assets/images/userPhoto.jpeg";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_PROFILE_USER_DATA = 'SET_PROFILE_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    userSmallPhoto: null,
    captcha: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
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
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}})
export const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})
export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setProfileUserData = (userSmallPhoto) => ({type: SET_PROFILE_USER_DATA, userSmallPhoto})

export const getAuthUserData = () => async (dispatch) => {
    dispatch(toggleFetching(true));

    let response =  await authAPI.authMe();

    if(response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email,true));
    }
    dispatch(toggleFetching(false));
    //     .then(() => {
    //     usersAPI.setAuthMeInfo(this.props.userId).then(data => {
    //         let userSmallPhoto = data.photos.small;
    //         userSmallPhoto = userPhoto;
    //         this.props.setProfileUserData(userSmallPhoto);
    //     })
    // })
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if(response.data.resultCode === 10) {
        dispatch(setCaptcha(true));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logout = (email, password, rememberMe) => async (dispatch) => {
        let response = await authAPI.logout();

        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null,false));
        }
}

export default authReducer;