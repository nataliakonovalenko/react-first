import React from 'react';
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'newPostForm'
})(PostForm)

export default PostReduxForm;