const initialState = {
    value: true
};

const formValueReducer = (state = initialState, action) => {
    if (action.type === 'SET_FORM_VALUE') {
        return {
            ...state,
            value: action.payload,
        }
    }
    return state;
}

export default formValueReducer;