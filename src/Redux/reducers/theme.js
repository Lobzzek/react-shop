const initialState = {
    value: "black"
};

const themeReducer = (state = initialState, action) => {
    if (action.type === 'SET_THEME') {
        return {
            ...state,
            value: action.payload,
        }
    }
    return state;
}

export default themeReducer;