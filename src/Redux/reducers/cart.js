const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // let found = state.items.some(el => {
            //     return el.id === action.payload.id;
            // });
            // if (!found) {
            //     return {
            //         ...state,
            //         items: [...state.items, Object.assign({ score: state.count }, action.payload)],
            //         countItems: state.items.length + 1,
            //     }
            // }
            // else {
            //     console.log(action.id)
            // }
            
            if ( state.items.find(el => el.id === action.id) === undefined ){
                return{
                    ...state,
                    items: [...state.items, Object.assign({ score: 1 } , action.payload)],
                }
            }else{
                // let index = state.items.findIndex(el => el.id === action.id);
                // state.items.splice(index, 1);
                // console.log(state.items)
                return {
                    ...state,
                    items: [Object.assign({ score: state.items.find(el => el.id === action.id).score += 1 }, action.payload)],
                }
            }
            
            break;
    
        case 'REMOVE_IN_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                countItems: state.items.length - 1,
            }
            break;
    }
    return state;
}


export default cartReducer;