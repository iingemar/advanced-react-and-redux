import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";
import axios from 'axios';

export function saveComment(comment) {
    console.log('saveComment:', comment);
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    console.log('fetchComments');
    console.log('[GET] http://jsonplaceholder.typicode.com/comments');

    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    console.log('response:', response);

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn) {
    console.log('changeAuth:', isLoggedIn);

    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}