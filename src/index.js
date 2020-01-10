import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 7 }
]

let dialogs = [
    {id: 1, name: 'Natalia'},
    {id: 2, name: 'Paul'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Dima'},
    {id: 6, name: 'Aleksandra'},
    {id: 7, name: 'Anastasia'},
    {id: 8, name: 'Vasya'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Super!'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
