import { combineReducers } from 'redux';
import cartReducer from './cart';
import clothesReducer from './clothes'
import imgSliderReducer from './imgSlider'

const rootReducer = combineReducers({
    clothes: clothesReducer,
    cart: cartReducer,
    imgSlider: imgSliderReducer,
})

export default rootReducer