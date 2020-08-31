import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//creating a table of middlewares to add on it whenever we need a new middleware (scalability)
const middlewares =[logger];
const store =createStore(rootReducer,applyMiddleware(...middlewares));

export default store;