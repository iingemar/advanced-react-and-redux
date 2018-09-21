import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            // [...state] takes all existing comments in the state,
            // And then we add our new comment to this copy of the state.
            return [...state, action.payload];

        case FETCH_COMMENTS:
            console.log('commentsReducer');
            console.log('action.payload:', action.payload);
            const comments = action.payload.data.map((comment) => {
                return comment.name;
            });
            console.log(comments);

            // Return comments before in state, then add the fetched ones
            return [...state, ...comments];

        default:
            return state;
    }
}