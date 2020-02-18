import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostReduxForm from "./PostForm/PostForm";

const MyPosts  = (props) => {
    let postsElements = props.posts.map( el => <Post message={el.message} key={el.id} like={el.likesCount} /> );

    /*let onAddPost = () => {
        props.addPost();
    };*/

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<div>
                <div>
                    <textarea onChange={ onPostChange } value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>*/}
            <PostReduxForm />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;