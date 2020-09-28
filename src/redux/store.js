import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

//creating a table of middlewares to add on it whenever we need a new middleware (scalability)

const middlewares =[logger,thunk];
export const store =createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor =persistStore(store);
export default {store,persistor};