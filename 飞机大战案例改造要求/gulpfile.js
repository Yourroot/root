var gulp = require('gulp');
//var uglify = require('gulp-uglify'); //js 压缩插件
//var bom = require('gulp-bom'); //解决中文乱码插件
var minifyCss = require('gulp-minify-css'); //css 压缩插件
//var minifyHtml = require('gulp-minify-html'); //html 压缩插件
//var imagemin = require('gulp-imagemin'); //图片压缩相关插件
//var pngquant = require('imagemin-pngquant'); //png 图片压缩插件
//var rename = require('gulp-rename'); //重命名插件
//var babel = require('gulp-babel');
//压缩 js
//var gulp = require('gulp');  
var babel = require('gulp-babel');  
gulp.task('jstask', function () {  
    gulp.src('code/css/dafeiji.css')  
//      .pipe(babel({presets: ['es2015']}))  
        .pipe(minifyCss())  
        .pipe(gulp.dest('weidongming/css'));  
});  
gulp.task('default',['jstask']);
//gulp.task('cssTask', function(){
//gulp.src('code/css/*')
//.pipe(minifyCss())
//.pipe(gulp.dest('weidongming/css'));
//});


