import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';

//creating a table of middlewares to add on it whenever we need a new middleware (scalability)
const middlewares =[logger];
export const store =createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor =persistStore(store);
export default {store,persistor};