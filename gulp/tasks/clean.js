var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var config      = require('../config').clean;

gulp.task('clean', function() {

	return gulp.src(config.dirs, { read: false })
		.pipe($.rimraf({ force: true }));

});
