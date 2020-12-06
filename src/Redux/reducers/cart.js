const initialState = {
    items: [],
    countItems: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.items.find(el => el.id === action.id) === undefined) {
                return {
                    ...state,
                    items: [...state.items, Object.assign({ score: 1, selectedColor: action.payload.color[0], selectedSize: action.payload.size[0] }, action.payload)],
                    countItems: state.countItems + 1,
                }
            } else {
                let index = state.items.indexOf(state.items.find(el => el.id === action.id));
                state.items[index].score += 1;
                state.countItems += 1;
            }
        break;
    
        case 'REMOVE_IN_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                countItems: state.countItems - (1 * state.items.find(el => el.id === action.payload).score),
            }
        break;
        case 'INCREMENT':
            action.payload.score += 1; 
            state.countItems += 1;
            break;
        case 'DECREMENT':
            if ( action.payload.score > 1){
                action.payload.score -= 1; 
                state.countItems -= 1;
            }
        break;
        case "COLOR":
            state.items.find(el => el.id === action.id).selectedColor = action.color;
            return {
                ...state
            }
        case "SIZE": 
            state.items.find(el => el.id === action.id).selectedSize = action.size;
            return {
                ...state
            }
    }
    return state;
}


export default cartReducer;