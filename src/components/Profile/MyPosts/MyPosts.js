import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p, i) =>
        <Post key={i} message={p.message} likesCount={p.likesCount}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} placeholder='New post'></textarea>
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;