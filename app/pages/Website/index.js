import React from 'react';
import Router, {RouteHandler} from 'react-router';
import Template from './screens/Template/index.js';

/**
 * @name App
 * @component
 *
 * @description
 * - React App Bootstrap
 * - Render Route and Template
 */

export default class App extends React.Component {

    /**
     * @name render
     * @description
     * - Render Route and Template
     */

    render() {

        return (
            <Template {...this.props}>
                <RouteHandler {...this.props} />
            </Template>
        );

    }

};
