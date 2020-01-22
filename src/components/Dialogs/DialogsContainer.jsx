import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    };

    return (
        <Dialogs updateNewMessage={onMessageChange} addMessage={addMessage}
                 messages={state.dialogsPage.messages} dialogs={state.dialogsPage.dialogs}
                 newMessageText={state.dialogsPage.newMessageText} />
    )
}

export default DialogsContainer;