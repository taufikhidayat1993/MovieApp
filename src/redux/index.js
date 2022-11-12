import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';

// please read
// this index file is inside src/redux/index.js
export const IndexReducer = combineReducers({
  userReducer,
});