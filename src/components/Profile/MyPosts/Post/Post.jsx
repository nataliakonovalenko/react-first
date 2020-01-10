import React from 'react';
import s from './Post.module.css';

const Post  = (props) => {
    return(
        <div className={s.item}>
            <img src="https://dbpost.com/wp-content/uploads/2018/06/istock-499609170.jpg" alt=""/>
            <div>{props.message}</div>
            <div>Like {props.like}</div>
        </div>
    )
}

export default Post;