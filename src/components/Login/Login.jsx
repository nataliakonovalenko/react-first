import React from 'react';

const Login = (props) => {
    return(
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <input placeholder="Login" />
                </div>
                <div>
                    <input placeholder="Password" />
                </div>
                <div>
                    <input type="checkbox" /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}

export default Login;