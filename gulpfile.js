/**
 * Created by Administrator on 2016/12/10.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
    cssmin = require('gulp-minify-css');
    rename = require('gulp-rename');

//����sass�����css
gulp.task('sass2',function(){
    gulp.src('src/scss/*.scss')//��������ļ�·��
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
        .pipe(gulp.dest('src/css/'))//������Զ������·��
})

//����sass�����css
gulp.task('sass2',function(){
    gulp.src('src/scss/*.scss')//��������ļ�·��
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))//������Զ������·��
})

gulp.task('default',['sass2']);