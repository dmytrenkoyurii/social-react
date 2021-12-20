import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div  className={s.user}>
            <img className={s.user_cover}
                 src='https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                 alt="user cover"/>
        </div>
        <div className={s.user_info}>
            <img className={s.user_img} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user photo"/>
            <div>
                <h3>Yurii Dmytrenko</h3>
                <p>Year of Birth: 1993</p>
                <p>Date of Birth: 10 December</p>
                <p>Country: Ukraine</p>
                <p>City: Poltava</p>
            </div>
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div>
                    <div className={s.posts}>
                        <div className={s.item}>
                            post 1
                        </div>
                        <div>
                            <div className='item'>
                                post 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;