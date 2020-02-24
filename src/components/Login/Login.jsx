import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

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

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email"
                       name="email"
                       component={Input}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={Input}
                       validate={[required, maxLength30]} />
            </div>
            <div>
                <Field type="checkbox"
                       name="rememberMe"
                       component={Input}
                       validate={[required]}
                /> remember me
            </div>
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