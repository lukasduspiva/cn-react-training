import { combineReducers } from 'redux';
import { reducer as jokesReducer } from '../containers/reducer';

const configureReducer = () => combineReducers({
    jokes: jokesReducer,
});

export { configureReducer };
