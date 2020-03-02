import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
//import userPhoto from "../../assets/images/userPhoto.jpeg";


class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, {logout})(HeaderContainer);