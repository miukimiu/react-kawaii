var gulp = require('gulp'),
  ghPages = require('gulp-gh-pages');



gulp.task('deploy', function() {
  return gulp.src('./styleguide/**')
    .pipe(ghPages());
});
