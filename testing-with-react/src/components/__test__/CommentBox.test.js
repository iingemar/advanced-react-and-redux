import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    // full rendering actually mounts the component in the DOM. (our fake DOM from jsdom)
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    // Make sure we don't pollute the DOM
    wrapped.unmount();
});

it('has a textarea and a button', () => {
    // Find every node in the render tree that matches the provided selector.
    // 1. A Valid CSS Selector
    // class syntax (.foo, .foo-bar, etc.)
    // element syntax (input, div, span, etc.)
    // id syntax (#foo, #foo-bar, etc.)
    // attribute syntax ([href="foo"], [type="text"], etc.)
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        // Return fake event object
        target: { value: 'new comment' }
    });

    // Force update component
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('empties textarea on submit form', () => {
    // Simulate user writing something in the textarea
    wrapped.find('textarea').simulate('change', {
        // Return fake event object
        target: { value: 'new comment' }
    });
    wrapped.update();
    // Good to check that we actually changed the textarea, so we don't get a false positive on next expect.
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    // Simulate user submitting the form
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
});