let initialState = {
    friends: [
        {id: 1, name: 'Paul', lastName: 'Smith'},
        {id: 2, name: 'Julia', lastName: 'Green' }
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;