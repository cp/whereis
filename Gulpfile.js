var gulp = require('gulp'),
    path = require('path'),
    webpack = require('gulp-webpack'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

gulp.task('webpack', function() {
  gulp.src('index.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|build)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015'],
              babelrc: false
            }
          },
          {test: /\.scss/, loader: 'style!css!sass?includePaths[]=' +
              (path.resolve(__dirname, "./node_modules"))},
          {test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
          {test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
          {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
      }
    }))
    .pipe(rename('whereis.js'))
    .pipe(gulp.dest('build'))
})

gulp.task('styles', function() {
  gulp.src('lib/styles/*.scss')
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('build'))
})

gulp.task('index', function() {
  gulp.src('lib/index.html')
    .pipe(gulp.dest('build'))
})

gulp.task('serve', function() {
  gulp.src('build')
    .pipe(webserver({open: true}))
})

gulp.task('watch', function() {
  gulp.watch('lib/styles/*.sass', ['styles']);
  gulp.watch('lib/index.html', ['index']);
  gulp.watch(['index.js', 'lib/*.js', 'lib/**/*.js'], ['webpack']);
})

gulp.task('default', ['styles', 'webpack', 'index', 'watch', 'serve'])
