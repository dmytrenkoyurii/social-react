import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

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

    let dialogs = [
        {id: '1', name: 'Yurii'},
        {id: '2', name: 'Vlad'},
        {id: '3', name: 'Ihor'},
        {id: '4', name: 'Stas'},
        {id: '5', name: 'Vitaliy'},
        {id: '6', name: 'Andriy'},
        {id: '7', name: 'Roman'}
    ]

    let message = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'What are you working on?'}
    ]

    let dialogsElements = dialogs.map((d, i) =>
        <DialogItem key={i} id={d.id} name={d.name}/>
    );

    let messagesElements = message.map((m, i) =>
        <Message key={i} message={m.message}/>
    );

    console.log(message)
    console.log(messagesElements)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;