/**
 * @name Home
 * @component
 *
 * @description
 * - Home Page
 */

import React from 'react';

import Intro from './components/Intro'

export default React.createClass({

    render() {
        return (
            <div className="home">
                <Intro />
            </div>
        )
    }

});
