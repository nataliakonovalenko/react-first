import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="New post text"
                       validate={[required, maxLength10]}/>
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