const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TO_CART') {
        let found = state.items.some(el => {
            return el.id === action.payload.id;
        });
        if (!found) {
            return {
                ...state,
                items: [...state.items, action.payload],
                countItems: state.items.length + 1,
            }
        }
        else {
            console.log("Добовляю в score")
        }

    }else if(action.type === 'REMOVE_IN_CART'){
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload),
            countItems: state.items.length - 1,
        }
    }
    return state;
}


export default cartReducer;