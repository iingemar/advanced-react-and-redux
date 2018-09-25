import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';


class CommentBox extends Component {
    state = {
        comment: ''
    };

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

// Connect pass the action creators to our CommentBox through props
export default connect(null, actions)(requireAuth(CommentBox));