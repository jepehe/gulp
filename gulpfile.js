var gulp = require('gulp'),

	//tool
	browserSync = require('browser-sync'),
	rename = require('gulp-rename'),
	sourcemaps = require("gulp-sourcemaps"),
	replace = require('gulp-replace'),
    
	//css files
    less = require("gulp-less"),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require("gulp-autoprefixer"),
    minifycss = require('gulp-minify-css'),

    //javascript files
    concatJs = require("gulp-concat"),
    babel = require("gulp-babel"),
    uglify = require('gulp-uglify'),

    //HTML files
    htmlmin = require('gulp-htmlmin'),
    contentIncluder = require('gulp-content-includer'),

    //images files
    imagemin = require('gulp-imagemin');

var devFilePath = "./assets-dev",
	minFilePath = "./assets-min";

var PATH = {};

	PATH.srcHtml = devFilePath + "/src/**";
	PATH.srcCss = devFilePath + "/src/css/**";
	PATH.srcJs = devFilePath + "/src/js/**";

	PATH.destFiles = minFilePath + "/**";

/* ------------ tools ------------ */
gulp.task('reload', [''], function(){
    browserSync.reload()
});    

gulp.task('browser-sync', function() {
    browserSync({
        // files: "**",
        server: {
            baseDir: "./",
            directory: true
        },
        port: 3030
    });
});

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('bar', 'foo'))
    .pipe(gulp.dest('build/file.txt'));
});


/* ------------compile HTML ------------ */
gulp.task('buildHtml',function() {
    return gulp.src(filePath.page)
        .pipe(contentIncluder({
            includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g
        })).pipe(gulp.dest(filePath.build));
});

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
/* ------------compile CSS ------------ */
gulp.task('build-less', function(){
  gulp.src('./public/less/*.less')
    .pipe(less({ compress: true }))
    .on('error', function(e){console.log(e);} )
    .pipe(gulp.dest('./public/css/'));

});

// 合并、压缩、重命名css
gulp.task('min-styles',['build-less'], function() {
  gulp.src(['./public/css/*.css'])
    .pipe(concat('all.css')) // 合并文件为all.css
    .pipe(gulp.dest('./public/css/')) // 输出all.css文件
    .pipe(rename({ suffix: '.min' })) // 重命名all.css为 all.min.css
    .pipe(minifycss()) // 压缩css文件
    .pipe(gulp.dest('./public/css/')); // 输出all.min.css
});

gulp.task('develop', function() {
    gulp.watch('./public/less/*.less', ['build-less', 'min-styles']);
});

gulp.task('concat-css', function () {
  return gulp.src('assets/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('out/'));
});


/* ------------compile JS ------------ */

gulp.task('minjs', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task("compileEs6", function () {
  return gulp.src("assets-dev/src/js/es6.js")
    .pipe(babel())
    .pipe(gulp.dest("./"));
});
/* ------------compile images ------------ */
gulp.task('build-imagemin', function () {

gulp.src('src/img/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
        optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('dist/img'));

});



gulp.task('default', ["browser-sync"]);
// gulp.task('default', () => {
//     return gulp.src('/assets-dev/src/js/common/*.js')
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(gulp.dest('./build'));
// });