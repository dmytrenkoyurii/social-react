import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hi, how are you?', likesCount: '15'},
        {id: '2', message: 'It"s my first post.', likesCount: '7'},
        {id: '3', message: 'It"s my second post.', likesCount: '1'},
    ]

    let postsElements = posts.map((p, i) =>
        <Post key={i} message={p.message} likesCount={p.likesCount}/>
    );

    return (
        <div>
            My posts
            <div>
                <textarea placeholder='New post'></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;