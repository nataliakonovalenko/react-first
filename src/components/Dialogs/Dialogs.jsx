import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    console.log(props);

    let dialogsElements = props.data.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.data.messages.map( el => <Message message={el.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;