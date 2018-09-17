import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';

// Should return an array of comments
export default combineReducers({
    comments: commentsReducer
});