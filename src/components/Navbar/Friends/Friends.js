import React from 'react'
import Friend from "./Friend/Friend";
import s from './Friends.module.css'

const Friends = (props) => {

    let friendsElements = props.state.map((f, i) =>
        <Friend key={i}  name={f.name} />
    );

    return (
        <div className={s.friends}>
            {friendsElements}
        </div>
    )
}

export default Friends;