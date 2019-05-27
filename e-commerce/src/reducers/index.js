import {combineReducers} from 'redux';
import listsReducer from './listsReducer';
import cartsReducer from './cartsReducer';


export default combineReducers ({
    images: listsReducer,
    cart: cartsReducer
})