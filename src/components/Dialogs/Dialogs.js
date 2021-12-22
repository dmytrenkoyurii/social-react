import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/1" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <img className={s.userImg} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                     alt="user photo"/>
                {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Yurii"/>
                <DialogItem id="2" name="Vlad"/>
                <DialogItem id="3" name="Ihor"/>
                <DialogItem id="4" name="Stas"/>
                <DialogItem id="5" name="Vitaliy"/>
                <DialogItem id="6" name="Andriy"/>
                <DialogItem id="7" name="Roman"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="What are you working on?"/>
            </div>
        </div>
    )
}

export default Dialogs;