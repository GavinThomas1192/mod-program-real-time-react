import React from 'react';
import { route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './component/HomePage';
import Room from './component/Room';

export default (
    <Route path='/' component={App} >
        <IndexRoute component={HomePage} />
        <Route path='/rooms/:id' component={Room} />
    </Route>
);