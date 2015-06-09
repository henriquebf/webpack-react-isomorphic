var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var env = process.env.NODE_ENV === 'production' ? 'production' : 'develop';
var webpackConfig = require('../../webpack-' + env + '.config');

gulp.task('webpack', function(callback) {

    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });

});
