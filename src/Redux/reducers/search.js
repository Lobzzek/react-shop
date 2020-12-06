const initialState = {
    value: " ",
};

const searchReducer = (state = initialState, action) => {
    if (action.type === 'SEARCH') {
        return {
            ...state,
            value: action.payload
        }
    }
    return state;
}

export default searchReducer;