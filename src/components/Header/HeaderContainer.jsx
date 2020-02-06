import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {setAuthUserData, setProfileUserData, toggleFetching} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import userPhoto from "../../assets/images/userPhoto.jpeg";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleFetching(false);
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            }).then(() => {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`, {
                    withCredentials: true
                })
                    .then(response => {
                        let userSmallPhoto = response.data.photos.small;
                        userSmallPhoto = userPhoto;
                        this.props.setProfileUserData(userSmallPhoto);
                })
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Header {...this.props}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    userSmallPhoto: state.auth.userSmallPhoto
});

export default connect(mapStateToProps, {setAuthUserData, toggleFetching, setProfileUserData})(HeaderContainer);