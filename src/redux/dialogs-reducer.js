const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: action.newMessageText}]
            };
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (newMessageText) => ({ type: ADD_NEW_MESSAGE, newMessageText })

export default dialogsReducer;