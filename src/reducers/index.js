import { combineReducers } from "redux";
//import post reducer
import posts from './posts';
//import auth reducer
import auth from './auth';

export default combineReducers({
    posts,
    auth,
});