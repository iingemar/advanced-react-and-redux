import { SAVE_COMMENT } from "actions/types";

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            // [...state] takes all existing comments in the state,
            // And then we add our new comment to this copy of the state.
            return [...state, action.payload];
        default:
            return state;
    }
}