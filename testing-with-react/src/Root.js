import React from 'react';
// Provider makes the Redux store available to the connect() calls.
import { Provider } from 'react-redux';
// Creates a Redux store that holds the complete state tree of your app.
import { createStore } from 'redux';
import reducers from 'reducers/index'


export default ({ children, initialState = {} }) => {
    return (
        <Provider store={createStore(reducers, initialState)} >
            { children }
        </Provider>
    );
};