var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var rename = require("gulp-rename");

// Static server
gulp.task("server", function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task("styles", function() {
    return gulp.src("src/sass/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
})

gulp.task("watch", function(){
    gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles"))
    gulp.watch("src/*.html").on("change", browserSync.reload);
})

gulp.task("default", gulp.parallel("watch", "server", "styles"));