import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Yurii</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Ihor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Stas</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Vitaliy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Andriy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Roman</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What are you working on?</div>
            </div>
        </div>
    )
}

export default Dialogs;