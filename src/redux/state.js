const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'UPDATE-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 7 }
            ],
            newPostText: 'Textarea value'
        },
        dialogsPage: {
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
        },
        navbar: {
            friends: [
                {id: 1, name: 'Paul', lastName: 'Smith'},
                {id: 2, name: 'Julia', lastName: 'Green' }
            ],
        },
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 8,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const updateNewMessageActionCreator = (text) =>
    ({ type: UPDATE_MESSAGE_TEXT, newMessage: text })

export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE })

export default store;

window.store = store;

































