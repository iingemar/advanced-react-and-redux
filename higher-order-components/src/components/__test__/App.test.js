// Could also be called App.js but calling it App.test.js adds more clarity what it is.
import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList'

// Let because we want to reassign this multiple times
let wrapped;

// Executed before each test. Only applied on tests in this file.
beforeEach(() => {
    // Enzymes shallow renders *just* the given component and none of its React children.
    // Wrapped version of our app component. Has additional Enzyme functionality on top!
    wrapped = shallow(<App/>);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});

