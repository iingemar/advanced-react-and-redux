import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
    // Atempt to render *entire* app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    // Find button and click
    wrapped.find('.fetch-comments').simulate('click');

    // Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(500);
});