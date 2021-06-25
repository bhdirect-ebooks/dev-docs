'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var cssnano = require('cssnano');

var dirs = {
  public: 'public',
  screenshots: 'public/build/screenshots'
};

function useref() {
  var assets = $.useref({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe($.uniqueFiles())
    .pipe($.if('*.css', $.postcss([
      cssnano()
    ])))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.rev())
    .pipe($.revReplace({
      prefix: '/'
    }))
    .pipe(gulp.dest('public'));
}

function screenshot_rev() {
  return gulp.src('public/themes/screenshots/*.png')
    .pipe($.rev())
    .pipe(gulp.dest(dirs.screenshots))
    .pipe($.rev.manifest())
    .pipe(gulp.dest(dirs.screenshots));
}

function screenshot_resize() {
  return gulp.src(dirs.screenshots + '/*.png')
    .pipe($.responsive({
      '*.png': [
        {
          width: 400,
          progressive: true
        },
        {
          progressive: true,
          rename: {
            suffix: '@2x'
          }
        }
      ]
    }))
    .pipe(gulp.dest(dirs.screenshots));
}

function screenshot_revreplace() {
  return gulp.src([dirs.screenshots + '/rev-manifest.json', 'public/themes/index.html'])
    .pipe($.revCollector({
      replaceReved: true,
      dirReplacements: {
        '/themes/screenshots': '/build/screenshots'
      }
    }))
    .pipe(gulp.dest('public/themes'));
}

exports.screenshot = gulp.series(screenshot_rev, screenshot_resize, screenshot_revreplace)
exports.default = gulp.series(useref)