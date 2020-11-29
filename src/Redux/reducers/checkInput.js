const initialState = {
    items: "no"
};

const checkInputReducer = (state = initialState, action) => {
    if (action.type === 'CHECK_INPUT') {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}

export default checkInputReducer;