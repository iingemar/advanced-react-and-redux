// Could also be called App.js but calling it App.test.js adds more clarity what it is.
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';


it('shows a comment box', () => {
    // Enzymes shallow renders *just* the given component and none of its React children.
    // Wrapped version of our app component. Has additional Enzyme functionality on top!
    const wrapped = shallow(<App/>);


});