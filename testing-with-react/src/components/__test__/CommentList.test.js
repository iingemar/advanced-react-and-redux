import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';


let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['apa', 'gorilla', 'schimpans']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    );
});

it('creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(3);
});

it('shows text from each comment', () => {
    expect(wrapped.render().text()).toEqual('apagorillaschimpans');
});