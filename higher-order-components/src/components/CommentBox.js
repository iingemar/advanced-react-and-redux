import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component {
    state = {
        comment: ''
    };

    // When rendered first time
    componentDidMount() {
        console.log('CommentBox: componentDidMount');
        this.shouldNavigateAway();
    }

    // Called when component gets new props
    componentDidUpdate() {
        console.log('CommentBox: componentDidUpdate');
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if (!this.props.auth) {
            console.log('Not logged in! Redirecting to index.');
            this.props.history.push('/')
        } else {
            console.log('Welcome!');
        }
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    };

    handleSubmit = (event) => {
        // Keep page from reloading
        event.preventDefault();

        // Use the connected saveComment action from mapDispatchToProps below
        console.log('handleSubmit:', this.state.comment);
        this.props.saveComment(this.state.comment);

        // Empty text area
        this.setState({
            comment: ''
        });
    };

    render() {
        return (
            <div>
                <h4>CommentBox</h4>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.comment}
                    />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <p>auth: {this.props.auth ? 'logged in' : 'not logged in'}</p>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, actions)(CommentBox);