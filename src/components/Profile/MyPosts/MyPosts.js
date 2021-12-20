import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea placeholder='New post'></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likecount='15'/>
                <Post message='It"s my first post.' likecount='7'/>
            </div>
        </div>
    )
}

export default MyPosts;