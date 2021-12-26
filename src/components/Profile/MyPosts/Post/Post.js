import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images.unsplash.com/photo-1586943759341-be5595944989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                 alt="post image"/>
            <p>{props.message}</p>
            <div className={s.item_like}>
                <span>{props.likesCount} <img src="https://cdn-icons-png.flaticon.com/512/456/456115.png" alt="like"/></span>
            </div>
        </div>
    )
}

export default Post;