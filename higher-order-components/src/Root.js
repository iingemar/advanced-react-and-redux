import React from 'react';
// Provider makes the Redux store available to the connect() calls.
import { Provider } from 'react-redux';
// Creates a Redux store that holds the complete state tree of your app.
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import reducers from 'reducers/index'


export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async)
    );

    return (
        <Provider store={store} >
            { children }
        </Provider>
    );
};