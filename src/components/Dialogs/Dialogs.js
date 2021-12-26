import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d, i) =>
        <DialogItem key={i} id={d.id} name={d.name}/>
    );

    let messagesElements = props.state.message.map((m, i) =>
        <Message key={i} message={m.message}/>
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();

    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div className={s.addMessage}>
                    <textarea onChange={onMessageChange} ref={newMessageElement} placeholder='New message'></textarea>
                    <button onClick={addMessage}>
                        Add message
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;