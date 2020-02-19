import React from 'react';
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="New post text"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ProfilePostReduxForm = reduxForm({
    form: 'addNewPostForm'
})(PostForm)

export default ProfilePostReduxForm;