const ADD_MESSAGE = 'UPDATE-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Natalia'},
        {id: 2, name: 'Paul'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Aleksandra'},
        {id: 7, name: 'Anastasia'},
        {id: 8, name: 'Vasya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Super!'}
    ],
    newMessageText: 'Message value'
};

const dialogsReducer = (state = initialState, action) => {
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