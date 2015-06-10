import React from 'react';
//
import Router, {Route, NotFoundRoute, DefaultRouter, RouteHandler, Link} from 'react-router';
//
import Website from '../pages/Website/index.js';
//
import Home from '../pages/Website/screens/Template/screens/Home/index.js';

export default (
    <Route handler={Website}>
        <Route path="/" name="Home" handler={Home} addHandlerKey={true} />
    </Route>
);
