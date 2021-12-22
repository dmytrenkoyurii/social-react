import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfoCover}>
                <img
                    src='https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                    alt="user cover"/>
            </div>
            <div className={s.profileInfoDesc}>
                <img className={s.profileInfoImg}
                     src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                     alt="user photo"/>
                <div>
                    <h3>Yurii Dmytrenko</h3>
                    <p>Year of Birth: 1993</p>
                    <p>Date of Birth: 10 December</p>
                    <p>Country: Ukraine</p>
                    <p>City: Poltava</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;