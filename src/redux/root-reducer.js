import userReducer from './user/user.reducer';

const { combineReducers } = require("redux")

export default combineReducers({
    user: userReducer
});