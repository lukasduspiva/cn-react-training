import { combineReducers } from 'redux';
import { reducer } from '../containers/reducer';

const configureReducer = () => combineReducers({
    jokes: reducer,
});

export { configureReducer };
