import {combineReducers} from 'redux';
import {stateColorReducer} from './colors';
import {statePostsReducer} from './posts';

export const rootReducer = combineReducers({
  color: stateColorReducer,
  posts: statePostsReducer,
});
