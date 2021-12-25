import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.messageImg} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                 alt="user photo"/>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;