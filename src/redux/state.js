import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;