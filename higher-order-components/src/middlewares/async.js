// export default function({ dispatch }) {
//     // Next is a reference to the next middleware in the chain
//     return function(next) {
//         return function(action) {
//
//         }
//     }
// }

// Above refactored to this ..
export default ({ dispatch }) => next => action => {
    // Does the action.payload contain a Promise
    // We assume that if payload have a then, it's a Promise.
    if (!action.payload || !action.payload.then) {
        // If it doesn't, send the action on to the next middleware in the chain.
        return next(action);
    }

    // If it does, wait for it to finish
    // ...action. Take all properties in action and add them
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
}




