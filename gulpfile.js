var gulp = require("gulp");

/* Basic */
require("./gulp/tasks/server.js");
require("./gulp/tasks/templates.js");
require("./gulp/tasks/styles.js");
require("./gulp/tasks/watch.js");
require("./gulp/tasks/svg.js");
require("./gulp/tasks/build.js");

require("./gulp/tasks/move.js");
gulp.task("php", ["server:php"]);

gulp.task("default", ["server:html", "watch"]);
