import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/app';
import HomePage from './component/homepage';
import Room from './component/room';

export default (
    <Route path='/' component={App} >
        <IndexRoute component={HomePage} />
        <Route path='/rooms/:id' component={Room} />
    </Route>
);