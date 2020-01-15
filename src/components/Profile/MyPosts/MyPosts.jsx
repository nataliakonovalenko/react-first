import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost} from "../../../redux/state";

const MyPosts  = (props) => {

    let postsElements = props.posts.map( el => <Post message={el.message} like={el.likesCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="10" ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;