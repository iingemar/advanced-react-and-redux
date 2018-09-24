import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';


it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'NEW COMMENT!'
    };

    const oldState = [];
    const newState = commentsReducer(oldState, action);

    const result = ['NEW COMMENT!'];
    expect(newState).toEqual(result);
});

it('handles action with unknown type', () => {
    const action = {
        type: 'ACTION_NOT_EXIST',
        payload: 'BOO!'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
});