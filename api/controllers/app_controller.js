var React = require('react');
var Router = require('react-router');
//
var Routes = require('../../app/routes/routes.js');
var Layout = require('../../app/templates/layout.js');

/**
 * @name initProps
 * @function
 *
 * @param {object}      req     request params
 * @param {object}      res     resource params
 * @param {function}    next    callback
 * @returns {*}
 *
 * @description
 * - Initialize App Props
 */

exports.initProps = function (req, res, next) {

    res.locals.props = {
        hostname: req.hostname,
        path: req.path
    };

    return next();

};

/**
 * @name renderReact
 * @function
 *
 * @param {object}  req     request params
 * @param {object}  res     resource params
 *
 * @description
 * - Render React App
 */

exports.renderReact = function (req, res) {

    var html;
    var props;

    Router.run(Routes, res.locals.props.path, function (Handler, state) {

        res.locals.props.urlParams = state.params;
        res.locals.props.urlQueries = req.query;

        html = React.renderToString(React.createElement(Handler, res.locals.props), null);
        props = res.locals.props;

    });

    res
        .status(res.statusCode)
        .send(new Layout(html, props).markup);

};
