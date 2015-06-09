import React from 'react';
//
import Router, {Route, NotFoundRoute, DefaultRouter, RouteHandler, Link} from 'react-router';
//
import App from '../pages/App/index.js';
//
import Home from '../pages/App/screens/Template/screens/Home/index.js';

export default (
    <Route handler={App}>
        <Route path="/" name="Home" handler={Home} addHandlerKey={true} />
    </Route>
);
