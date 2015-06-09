// HTML Template

function Layout (html, props) {

    var assetsUrl = props && process.env.NODE_ENV === 'production' ? props.assetsUrl : '/';

    var clientCss = assetsUrl + "styles-" + (props ? props.version : "0.0.0") + ".css";
    var clientJs  = assetsUrl + "client-" + (props ? props.version : "0.0.0") + ".js";

    if (process.env.NODE_ENV === 'development') {
        clientJs = 'http://' + (process.env.HOTLOADER_IP || 'localhost') + ':3001/public/client.js';
    }

    var markup = '<!DOCTYPE html>';
    //
    markup += '<html>';
    markup += 	'<head>';
    markup += 		'<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
    markup += 		'<meta http-equiv="X-UA-Compatible" content="IE=Edge">';
    markup += 		'<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">';

    if (process.env.NODE_ENV === 'production') {
        markup += '<link rel="stylesheet" href="' + clientCss + '">';
    }

    markup += 	'</head>';
    markup += 	'<body>';
    markup += 		'<div id="app">' + html + '</div>';
    markup += 		'<script>window.props = ' + JSON.stringify(props) + ';</script>';
    markup += 		'<script src="' + clientJs + '" async></script>';
    markup += 	'</body>';
    markup += '</html>';

    this.markup = markup;
}

module.exports = Layout;
