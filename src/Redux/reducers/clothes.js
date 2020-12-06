const initialState = {
    items: []
};

const clothesReducer = (state = initialState, action) => {
    if (action.type === 'ADD_CLOTHES') {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}

export default clothesReducer;