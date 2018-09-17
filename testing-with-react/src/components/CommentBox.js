import React, { Component } from 'react';

export default class CommentBox extends Component {
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

        // TODO Call action creator to save the comment
        console.log('handleSubmit:', this.state.comment);

        // Empty text area
        this.setState({
            comment: ''
        });
    };

    render() {
        return (
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
        );
    }
}