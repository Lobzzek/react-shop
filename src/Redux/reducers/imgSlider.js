const initialState = {
    items: []
};

const imgSliderReducer = (state = initialState, action) => {
    if (action.type === 'SET_IMG_SLIDER') {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}

export default imgSliderReducer;