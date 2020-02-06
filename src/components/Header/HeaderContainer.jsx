import React from "react";
import Header from "./Header";
import {setAuthUserData, setProfileUserData, toggleFetching} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import userPhoto from "../../assets/images/userPhoto.jpeg";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.authMe().then(data => {
                this.props.toggleFetching(false);
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            }).then(() => {
                usersAPI.setAuthMeInfo(this.props.userId).then(data => {
                        let userSmallPhoto = data.photos.small;
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