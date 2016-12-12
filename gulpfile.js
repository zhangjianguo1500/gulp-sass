/**
 * Created by Administrator on 2016/12/10.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
    cssmin = require('gulp-minify-css');
    rename = require('gulp-rename');

//编译sass后输出css
gulp.task('sass2',function(){
    gulp.src('src/scss/*.scss')//被编译的文件路径
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(gulp.dest('src/css/'))//编译后自动保存的路径
})

//编译sass后输出css
gulp.task('sass2',function(){
    gulp.src('src/scss/*.scss')//被编译的文件路径
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))//编译后自动保存的路径
})

gulp.task('default',['sass2']);