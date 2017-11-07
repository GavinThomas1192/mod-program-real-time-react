import { combineReducers } from 'redux';
import currentUser from './currentUserReducer';
import challenges from './challengesReducer';
export default combineReducers({
  currentUser,
  challenges

});