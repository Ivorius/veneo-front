var gulp = require("gulp"),
    config = require("../gulpconfig.json");


gulp.task('move:files', ['build'], function() {
    console.log("Moving files to folder /www/assets/");

    gulp.src(config.dist.root + 'assets/**/*.*')
        .pipe(gulp.dest('../www/assets/'));
});

