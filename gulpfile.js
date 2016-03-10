var browserify = require('browserify'),
    resolutions = require('browserify-resolutions'),
    watchify = require('watchify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    sourceFile = './src/main.jsx',
    destFolder = './public/js/',
    destFile = 'findem.js';

gulp.task('browserify', function() {
  return browserify(sourceFile)
  .plugin(resolutions, ['react', 'validate' ])
  .transform('babelify', {presets: ["react"]})

  .bundle()
  .pipe(source(destFile))
  .pipe(gulp.dest(destFolder));
});

gulp.task('watch', function() {
  var bundler = watchify(sourceFile);
  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle()
      .pipe(source(destFile))
      .pipe(gulp.dest(destFolder));
  }

  return rebundle();
});

gulp.task('default', ['browserify', 'watch']);
