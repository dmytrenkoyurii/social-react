import React from 'react'
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink
                to={path}
                className={navData => navData.isActive ? s.dialog + ' ' + s.active : s.dialog}>
                <img className={s.userImg} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                     alt="user photo"/>
                {props.name}</NavLink>
        </div>
    )
}

export default DialogItem;