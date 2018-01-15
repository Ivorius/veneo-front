var
  gulp = require("gulp"),
  plugins = require("gulp-load-plugins")({
    pattern: ["browser-*", "hygienist-*"]
  }),
  config = require("../gulpconfig.json");

// Run a server for HTML files
gulp.task("server:html", ["styles", "templates"], function() {
  plugins.browserSync.init({
    server: {
      baseDir: config.dev.root,
      routes: {
        "/bower_components": "./bower_components",
        '/node_modules': './node_modules'
      },
      middleware: plugins.hygienistMiddleware(config.dev.root)
    },
    notify: false
  });
});

// Set-up a proxy for PHP files
gulp.task("server:php", ["move:build"], function() {
  plugins.browserSync.init({
    proxy: config.dev.proxy,
   // notify: false
  });

    gulp.watch(config.dev.jsGlob,["watchAndMove"]);
});

gulp.task('watchAndMove', ["move:build"],  plugins.browserSync.reload);