"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7270],{8462:function(s,n,e){e.r(n),n.default=`[\u4E2D\u6587\u6587\u6863](https://www.gulpjs.com.cn/)

\u4F7F\u7528 gulp \u5B9E\u73B0\u4EE5\u4E0B\u4E3B\u8981\u529F\u80FD\uFF1A

1. html \u538B\u7F29
2. scss\u3001sass \u8F6C css\u3001css \u6837\u5F0F\u524D\u7F00\u3001css \u538B\u7F29
3. js \u7684 es6 \u8F6C es5\u3001js \u538B\u7F29
4. \u56FE\u7247\u538B\u7F29
5. \u8D44\u6E90\u6587\u4EF6\u7248\u672C\u53F7\u7BA1\u7406
6. \u751F\u6210\u538B\u7F29\u5305.zip \u6216.rar
7. \u6D4F\u89C8\u5668\u4E2D\u7F51\u9875\u81EA\u52A8\u91CD\u8F7D

\u51C6\u5907\u5DE5\u4F5C\uFF1A

> $ npm install -g gulp  
$ gulp -v  
> CLI version 2.0.1  
> Local version 4.0.0

Tips\uFF1Agulp4.0.0 \u5BF9\u6BD4\u4E4B\u524D\u7248\u672C\u6709\u8F83\u5927\u6539\u52A8\uFF0C\u6DFB\u52A0\u4E86 series\u3001parallel \u7B49\u65B9\u6CD5\u3002

\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u9879\u76EE\u7ED3\u6784\uFF1A

\`\`\`
h5
|_dist (gulp\u751F\u6210\u7684\u6587\u4EF6\u5B58\u653E\u76EE\u5F55)
|   |_audios
|   |   |_bg.1a1a1a1a.mp3
|   |_css
|   |   |_main.min.1b1b1b1b.css
|   |_imgs
|   |   |_bg.1c1c1c1c.png
|   |_js
|   |   |_main.min.1d1d1d1d.js
|   |   |_jweixin-1.4.0.js
|   |_index.html
|   |_rev-manifest.json
|_src
|   |_audios
|   |_imgs
|   |_js
|   |   |_main.js (\u9700\u8981\u5904\u7406)
|   |   |_jweixin-1.4.0.js (\u4E0D\u9700\u8981\u5904\u7406\u7684js\u6587\u4EF6)
|   |_scss
|   |   |_main.scss
|   |_index.html
|_gulpfile.js
|_package.json
\u2026\u2026
\`\`\`

package.json \u6587\u4EF6\uFF08\`$ npm init\`\uFF09

\`\`\`json
{
  "name": "h5",
  "version": "1.0.0",
  "description": "",
  "main": "gulpfile.js",
  "dependencies": {},
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "babel-preset-es2015": "^6.24.1",
    "browser-sync": "^2.26.3",
    "del": "^3.0.0",
    "gulp": "^4.0.0",
    "gulp-autoprefixer": "^6.0.0",
    "gulp-babel": "^6.1.3",
    "gulp-htmlmin": "^5.0.1",
    "gulp-if": "^2.0.2",
    "gulp-imagemin": "^5.0.3",
    "gulp-minify-css": "^1.2.4",
    "gulp-plumber": "^1.2.1",
    "gulp-rename": "^1.4.0",
    "gulp-rev-all": "^1.0.0",
    "gulp-rev-delete-original": "^0.2.3",
    "gulp-sass": "^4.1.0",
    "gulp-sourcemaps": "^2.6.4",
    "gulp-uglify": "^3.0.1",
    "gulp-zip": "^4.2.0",
    "vinyl-paths": "^2.1.0"
  },
  "scripts": {
    "start": "gulp",
    "build": "gulp build",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "xxx.git"
  },
  "author": "",
  "license": "ISC"
}
\`\`\`

\u6CE8\uFF1A\u5982\u9047 gulp-babel \u62A5\u9519\uFF0C\u662F[\u7248\u672C\u4E0D\u5339\u914D\u95EE\u9898](https://github.com/babel/gulp-babel/issues/165)\uFF0C\u4F7F\u7528 6.x.x \u7248\u672C\u3002

\`\`\`
[16:46:05] Starting 'jsTask'...
[16:46:05] Plumber found unhandled error:
Error in plugin "gulp-babel"
Message:

    Plugin/Preset files are not allowed to export objects, only functions. In D:\\workspaces\\h5\\node_modules\\babel-preset-es2015\\lib\\index.js

[16:46:05] Finished 'jsTask' after 19 ms
\`\`\`

gulpfile.js \u6587\u4EF6

\`\`\`js
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'); // \u7F16\u8BD1scss\u3001sass
var autoPrefixer = require('gulp-autoprefixer'); // \u6DFB\u52A0css\u524D\u7F00
var minifyCss = require('gulp-minify-css'); // \u538B\u7F29css
var babel = require('gulp-babel'); // es6\u8F6C\u6362
var uglify = require('gulp-uglify'); // \u538B\u7F29js
var rename = require('gulp-rename'); // \u91CD\u547D\u540D\u6587\u4EF6\uFF0C\u5982\u6DFB\u52A0.min\u540E\u7F00
var revAll = require('gulp-rev-all'); // \u6DFB\u52A0\u6587\u4EF6\u7248\u672C\u53F7\u5E76\u66FF\u6362\u6587\u4EF6\u5F15\u5165\u8DEF\u5F84
var revDel = require('gulp-rev-delete-original'); // \u5220\u9664\u65E7\u7248\u672Ccss\u3001js\u3001images
var gulpIf = require('gulp-if'); // \u4E3B\u8981\u7528\u4E8E\u73AF\u5883\u5224\u65AD
var sourceMaps = require('gulp-sourcemaps'); // \u538B\u7F29\u4EE3\u7801\u7684\u6620\u5C04
var imageMin = require('gulp-imagemin'); // \u538B\u7F29images
var vinylPaths = require('vinyl-paths'); // \u83B7\u53D6\u6587\u4EF6\u8DEF\u5F84
var del = require('del'); // \u5220\u9664\u6587\u4EF6
var zip = require('gulp-zip'); // \u751F\u6210\u538B\u7F29\u5305
var plumber = require('gulp-plumber'); // \u76D1\u63A7\u9519\u8BEF
var browserSync = require('browser-sync').create(); // \u6D4F\u89C8\u5668\u91CD\u8F7D

function cleanDist() {
  return gulp.src('dist/*').pipe(vinylPaths(del));
}

// \u7F16\u8BD1\u5E76\u538B\u7F29css
function cssTask() {
  var AUTOPREFIXER_BROWSERSLIST = [
    'iOS >= 7',
    'Android > 4.1',
    'Chrome >= 45',
    'Firefox > 14',
    'Edge >= 12',
    'Explorer >= 8',
    'Safari >= 9',
    'Opera >= 30',
    'last 2 versions',
    'last 1 major version',
    '>= 1%',
  ];
  return gulp
    .src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(gulpIf(process.env.NODE_ENV === 'development', sourceMaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer(AUTOPREFIXER_BROWSERSLIST))
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpIf(process.env.NODE_ENV === 'development', sourceMaps.write()))
    .pipe(gulp.dest('dist/css'));
}

// \u7F16\u8BD1\u5E76\u538B\u7F29js
function jsTask() {
  return gulp
    .src('src/js/main.js')
    .pipe(plumber())
    .pipe(gulpIf(process.env.NODE_ENV === 'development', sourceMaps.init()))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpIf(process.env.NODE_ENV === 'development', sourceMaps.write()))
    .pipe(gulp.dest('dist/js'));
}

// \u538B\u7F29\u56FE\u7247\uFF0C\u4EC5\u5904\u7406gif,jpg,png,svg\u683C\u5F0F
function compressImage() {
  return gulp
    .src('src/imgs/**/*')
    .pipe(
      imageMin(
        [
          imageMin.gifsicle({ interlaced: true }),
          imageMin.jpegtran({ progressive: true }),
          imageMin.optipng({ optimizationLevel: 5 }),
          imageMin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ],
        { verbose: true },
      ),
    )
    .pipe(gulp.dest('dist/imgs'));
}

// \u62F7\u8D1D\u6CA1\u88AB\u5904\u7406\u7684\u6587\u4EF6
function copyOthers() {
  return gulp
    .src(['src/**/*.html', 'src/audios/*', 'src/js/*.js', '!src/js/main.js'], {
      base: './src',
    })
    .pipe(gulp.dest('dist'));
}

// \u8D44\u6E90\u6587\u4EF6\u7248\u672C\u63A7\u5236
function revAllResources() {
  return gulp
    .src(['dist/**', '!dist/js/*', 'dist/js/main.**.js'])
    .pipe(revAll.revision({ dontRenameFile: ['.html'] }))
    .pipe(revDel())
    .pipe(gulp.dest('dist'))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest('dist'));
}

// \u751F\u6210\u538B\u7F29\u5305
function zipDist() {
  function checkTime(i) {
    if (i < 10) i = '0' + i;
    return i;
  }

  var date = new Date();
  var year = date.getFullYear();
  var month = checkTime(date.getMonth() + 1);
  var day = checkTime(date.getDate());
  var hour = checkTime(date.getHours());
  var minute = checkTime(date.getMinutes());
  var time = String(year) + String(month) + String(day) + String(hour) + String(minute);
  var build = 'labor-day-h5 ' + time + '.rar';

  return gulp
    .src(['dist/**/*', '!dist/rev-manifest.json'])
    .pipe(zip(build))
    .pipe(gulp.dest('dist'));
}

// \u76D1\u89C6\u6587\u4EF6\u53D8\u5316\uFF0C\u81EA\u52A8\u7F16\u8BD1
function watchFiles() {
  gulp.watch('src/scss/*', gulp.series(cssTask, browserSyncReload));
  gulp.watch('src/js/main.js', gulp.series(jsTask, browserSyncReload));
  gulp.watch('src/imgs/**/*', gulp.series(compressImage, browserSyncReload));
  gulp.watch(
    ['src/**/*.html', 'src/audios/*', 'src/js/*.js', '!src/js/main.js'],
    gulp.series(copyOthers, browserSyncReload),
  );
}

function browserSyncInit(done) {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: 'dist',
    },
    port: 3000,
  });
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  // browserSync.reload({ stream: true }); // \u53EA\u6253\u5305\u6587\u4EF6\uFF0C\u4E0D\u5237\u65B0\u6D4F\u89C8\u5668
  done();
}

function setDevEnvironment(done) {
  process.env.NODE_ENV = 'development';
  done();
}

function setProdEnvironment(done) {
  process.env.NODE_ENV = 'production';
  done();
}

// \u5F00\u53D1
gulp.task(
  'default',
  gulp.series(
    setDevEnvironment,
    cleanDist,
    gulp.parallel(cssTask, jsTask, copyOthers),
    compressImage,
    browserSyncInit,
    watchFiles,
  ),
);

// \u751F\u4EA7
gulp.task(
  'build',
  gulp.series(
    setProdEnvironment,
    cleanDist,
    gulp.parallel(cssTask, jsTask, copyOthers),
    compressImage,
    revAllResources,
    browserSyncInit,
    zipDist,
  ),
);
\`\`\`
`}}]);
