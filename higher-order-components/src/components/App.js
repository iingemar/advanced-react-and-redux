import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

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
                <button>Sign out</button>
            );
        } else {
            return (
                <button>Sign in</button>
            );
        }
    }

    render() {
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

export default connect(mapStateToProps)(App);