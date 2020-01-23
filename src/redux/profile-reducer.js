const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 7 }
    ],
    newPostText: 'Textarea value'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            let newPost = {
                id: 5,
                message: stateCopy.newPostText,
                likesCount: 0
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;