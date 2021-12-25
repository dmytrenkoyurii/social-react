import React from 'react'
import s from './Friend.module.css'

const Friend = (props) => {

    return (
        <div className={s.friend}>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                 alt="user photo"/>
            <h5>{props.name}</h5>
        </div>
    )
}

export default Friend;