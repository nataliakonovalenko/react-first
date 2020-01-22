import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (dispatch) => {
            dispatch(updateNewMessageActionCreator(dispatch));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;