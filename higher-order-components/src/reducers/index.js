import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';


// Should return an array of comments
// and if user isLoggedIn
export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});

