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
  .transform('babelify', {presets: ["react","es2015"]})
  .plugin(resolutions, ['react', 'validate', 'react-router', 'react-dom' ])
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

gulp.task('build', function() {
    process.env.NODE_ENV = 'production';
    gulp.start('browserify');
});

gulp.task('default', ['browserify', 'watch']);
