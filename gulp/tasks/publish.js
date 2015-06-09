var gulp            = require('gulp');
var runSequence     = require('run-sequence');

gulp.task('publish', function() {

    runSequence('clean', ['webpack', 'copy', 'copyJsVendor'], 's3');

});
