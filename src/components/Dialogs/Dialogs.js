import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Yurii
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
                <div className={s.dialog}>
                    Ihor
                </div>
                <div className={s.dialog}>
                    Stas
                </div>
                <div className={s.dialog}>
                    Vitaliy
                </div>
                <div className={s.dialog}>
                    Andriy
                </div>
                <div className={s.dialog}>
                    Roman
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