import React from 'react';
import ReactDOM from 'react-dom';
// Makes the Redux store available to the connect() calls.
import { Provider } from 'react-redux';
// Creates a Redux store that holds the complete state tree of your app.
import { createStore } from 'redux';
import reducers from 'reducers/index'

import App from 'components/App';


ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <App/>
    </Provider>,
    document.getElementById('root'));