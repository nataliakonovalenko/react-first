import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = props.messages.map( el => <Message message={el.message} key={el.id}/>);

    let addNewMessageText = (values) => {
        props.addNewMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <AddMessageReduxForm onSubmit={addNewMessageText}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageText"
                       placeholder="Enter your message"
                       validate={[required, maxLength30]} />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAdddMessageForm'
})(AddMessageForm)

export default Dialogs;