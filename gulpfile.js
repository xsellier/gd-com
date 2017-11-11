const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['env'],
      plugins: ['babel-plugin-add-module-exports']
    }))
    .pipe(gulp.dest('.'))
);
