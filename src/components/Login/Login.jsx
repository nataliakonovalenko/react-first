import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'
import Preloader from "../common/Preloader/Preloader";

const maxLength30 = maxLengthCreator(30);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return(
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            {props.captcha ? <div>captcha</div> : null}
        </>
    )
}

const LoginForm = ({handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [required, maxLength30])}
            {createField("Password", "password", Input, [required, maxLength30], {type: "password"})}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}

            {error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
});

export default connect(mapStateToProps, {login}) (Login);