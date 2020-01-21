const ADD_MESSAGE = 'UPDATE-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 8,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const updateNewMessageActionCreator = (text) =>
    ({ type: UPDATE_MESSAGE_TEXT, newMessage: text })

export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE })

export default dialogsReducer;