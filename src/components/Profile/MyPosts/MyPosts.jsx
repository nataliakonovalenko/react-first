import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import ProfilePostReduxForm from "./PostForm/PostForm";

const MyPosts  = (props) => {
    let postsElements = props.posts.map( el => <Post message={el.message} key={el.id} like={el.likesCount} /> );

    let addNewPost = (values) => {
        props.newPostText(values.newPostText);
    }

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <ProfilePostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;