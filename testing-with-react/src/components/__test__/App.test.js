// Could also be called App.js but calling it App.test.js adds more clarity what it is.
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


it('shows a comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App/>, div);

    // div.innerHTML
    // <div><div>CommentBox</div><div>CommentList</div></div>
    expect(div.innerHTML).toContain('CommentBox');

    // Make sure to cleanup
    ReactDOM.unmountComponentAtNode(div);
});