import {combineReducers} from 'redux';
import {stateColorReducer} from './colors';

export const rootReducer = combineReducers({
  color: stateColorReducer,
});
