import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';


// exact makes router only accept slash by itself.
class App extends Component {
    renderHeader() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li>{ this.renderButton() }</li>
            </ul>
        );
    }

    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => { this.props.changeAuth(false) }}>Sign out</button>
            );
        } else {
            return (
                <button onClick={() => { this.props.changeAuth(true) }}>Sign in</button>
            );
        }
    }

    render() {
        // Route sends some props to CommentBox. this.props.history
        // The CommentBox is a connected CommentBox, that add some properties also.
        return (
            <div>
                { this.renderHeader() }
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, actions)(App);