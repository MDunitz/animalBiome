import { combineReducers } from 'redux';
import commentsReducer from './comments';
// import authStateReducer from "redux-auth";

const rootReducer = combineReducers({
  // auth: authStateReducer,
  comments: commentsReducer
});

export default rootReducer;