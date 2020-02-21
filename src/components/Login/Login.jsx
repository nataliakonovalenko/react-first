import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return(
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login"
                       name="login"
                       component={Input}
                       validate={[required, maxLength20]}
                />
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={Input}
                       validate={[required, maxLength20]} />
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

export default Login;