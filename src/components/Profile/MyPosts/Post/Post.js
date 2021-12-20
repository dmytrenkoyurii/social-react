import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images.unsplash.com/photo-1586943759341-be5595944989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                 alt="post image"/>
            {props.message}
            <div>
                <span>{props.likecount} likes</span>
            </div>
        </div>
    )
}

export default Post;