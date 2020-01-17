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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;

































