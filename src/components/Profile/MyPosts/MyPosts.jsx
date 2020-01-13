import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts  = (props) => {

    console.log('myPosts', props);

    let postsElements = props.posts.map( el => <Post message={el.message} like={el.likesCount} /> );

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;