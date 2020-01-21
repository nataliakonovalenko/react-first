import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;

































