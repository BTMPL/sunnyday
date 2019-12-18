var gulp = require("gulp");

var less = require("gulp-less");
var path = require("path");

var LessAutoprefix = require("less-plugin-autoprefix");
var autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });

gulp.task("less", function() {
  return gulp
    .src("./style.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")],
        plugins: [autoprefix]
      })
    )
    .pipe(gulp.dest("./public/css"));
});

gulp.task("watch", function() {
  gulp.watch("./style.less", () => {
    return gulp
      .src("./style.less")
      .pipe(
        less({
          paths: [path.join(__dirname, "less", "includes")],
          plugins: [autoprefix]
        })
      )
      .pipe(gulp.dest("./public/css"));
  });
});
