import React from 'react';
import { Route } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// exact makes router only accept slash by itself.
export default () => {
    return (
        <div>
            <Route path="/post" component={CommentBox}/>
            <Route path="/" exact component={CommentList}/>
        </div>
    );
}