import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { configureReducer } from './configureReducer';

const rootReducer = configureReducer();

const middlewares = [thunk];

const configureStore = (intialState) => createStore(
    rootReducer,
    intialState,
    compose(applyMiddleware(...middlewares)),
);

export { configureStore };
