import React from 'react';
import {Router} from 'react-router';

export default class App extends React.Component {

    render() {

        return (
            <div id="template" className="template">
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
};
