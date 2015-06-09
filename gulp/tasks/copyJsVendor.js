var gulp = require('gulp');
var config = require('../config').copyJsVendor;

gulp.task('copyJsVendor', function() {

    return gulp.src(config.srcDir)
        .pipe(gulp.dest(config.destDir));
});
