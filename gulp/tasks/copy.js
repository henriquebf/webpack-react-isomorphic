var gulp = require('gulp');
var config = require('../config');
var copyConfig = config.copy;

gulp.task('copy', function() {

    return gulp.src(copyConfig.src, {base : copyConfig.base, cwd : copyConfig.cwd})
        .pipe(gulp.dest(config.global.destDir));
});
