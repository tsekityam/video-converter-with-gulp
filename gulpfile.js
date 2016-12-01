var gulp = require('gulp');
var ffmpeg = require('gulp-fluent-ffmpeg');

gulp.task('mkv_to_mp4', function () {
  return gulp.src('src/**/*.mkv')
  .pipe(ffmpeg('mp4', function (cmd) {
    return cmd
    .outputOptions('-movflags frag_keyframe+empty_moov');
  }))
  .pipe(gulp.dest('dest/'));
});
