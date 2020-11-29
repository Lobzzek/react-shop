import { combineReducers } from 'redux';
import cartReducer from './cart';
import clothesReducer from './clothes'
import imgSliderReducer from './imgSlider'
import searchReducer from './search'
import checkInputReducer from './checkInput'
import formValueReducer from './form'
import themeReducer from './theme'

const rootReducer = combineReducers({
    clothes: clothesReducer,
    cart: cartReducer,
    imgSlider: imgSliderReducer,
    search: searchReducer,
    checkInput : checkInputReducer,
    formValue: formValueReducer,
    theme: themeReducer,
})

export default rootReducer