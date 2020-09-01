import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

const { combineReducers } = require("redux")

export default combineReducers({
    user: userReducer,
    cart:cartReducer
});