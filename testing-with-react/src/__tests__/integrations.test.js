import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();

    // Would be better to import this URL from actions
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { name: 'fetched #1' },
            { name: 'fetched #2' }
        ]
    })
});

afterEach(() => {
    // Make sure we don't use this stubbed request anywhere else
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    // Atempt to render *entire* app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    // Find button and click
    wrapped.find('.fetch-comments').simulate('click');

    // Wait for the stubbed request to finish
    setTimeout(() => {
        // Update the UI with new comments
        wrapped.update();

        // Expect to find a list of comments!
        expect(wrapped.find('li').length).toEqual(2);

        // Tell jest to hold on until the setTimeout is finished.
        done();
    }, 100);
});