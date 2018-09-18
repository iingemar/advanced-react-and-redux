import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions';


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

export default connect(null, { saveComment })(CommentBox);