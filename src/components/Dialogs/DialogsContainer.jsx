import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;