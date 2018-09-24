import { CHANGE_AUTH } from 'actions/types'

// State will only contain isLoggedIn
// { true/false }
export default function(state = false, action) {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload;
        default:
            return state;
    }
}