/// <reference path="D:\con copia\ProgramaCion\HydroSystem\HydroCore\Hydro.Web\bower_components/respond-minmax/dest/respond.min.js" />
/// <reference path="D:\con copia\ProgramaCion\HydroSystem\HydroCore\Hydro.Web\bower_components/respond-minmax/dest/respond.min.js" />
/// <vs BeforeBuild='default' SolutionOpened='watch' />
// include plug-ins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var del = require('del');
var minifyCSS = require('gulp-minify-css');
var bower = require('gulp-bower');
 
var config = {
    //JavaScript files that will be combined into a jquery bundle

    jquerysrc: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery-validation/dist/jquery.validate.min.js',
        'bower_components/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js'
    ],
    jquerybundle: 'Scripts/min/jquery-bundle.min.js',
 
    //JavaScript files that will be combined into a Bootstrap bundle
    bootstrapsrc: [
        'bower_components/metisMenu/dist/metisMenu.min.js',
        'bower_components/raphael/raphael-min.js',
        'bower_components/respond-minmax/dest/respond.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js'
    ],
    bootstrapbundle: 'Scripts/min/bootstrap-bundle.min.js',
 
     
    //Modernizr
    modernizrsrc: ['bower_components/modernizr/modernizr.js'],
    modernizrbundle: 'Scripts/min/modernizer.min.js',
 
    //Bootstrap CSS and Fonts
    bootstrapcss: ['bower_components/bootstrap/dist/css/bootstrap.css',
                   'bower_components/metisMenu/dist/metisMenu.min.css',
                   'bower_components/font-awesome/css/font-awesome.min.css'],

    boostrapfonts:['bower_components/bootstrap/dist/fonts/*.*',
                    'bower_components/font-awesome/fonts/*.*'],

    appcss: 'Content/*.css',

    fontsout: 'Content/dist/fonts',
    cssout: 'Content/dist/css'
 
}
 
// Synchronously delete the output script file(s)
gulp.task('clean-vendor-scripts', function () {
    del.sync([config.jquerybundle,
              config.bootstrapbundle,
              config.modernizrbundle]);    
});
 
// Combine and the vendor files from bower into bundles (output to the Scripts folder)
gulp.task('vendor-scripts', ['clean-vendor-scripts', 'bower-restore'], function () {
    gulp.src(config.jquerysrc)
     .pipe(concat('jquery-bundle.min.js'))
     .pipe(gulp.dest('Scripts/min'));
 
    gulp.src(config.bootstrapsrc)
     .pipe(concat('bootstrap-bundle.min.js'))
     .pipe(gulp.dest('Scripts/min'));
 
    gulp.src(config.modernizrsrc)
        .pipe(uglify())
        .pipe(concat('modernizer-min.js'))
        .pipe(gulp.dest('Scripts/min'));
 
});
 
// Synchronously delete the output style files (css / fonts)
gulp.task('clean-styles', function () {
    del.sync([config.fontsout,
              config.cssout]);
});
 
// Combine and minify css files and output fonts
gulp.task('styles', ['clean-styles', 'bower-restore'], function () {
    config.bootstrapcss.push(config.appcss);
    gulp.src(config.bootstrapcss)
     .pipe(minifyCSS())
     .pipe(concat('app.min.css'))
     .pipe(gulp.dest(config.cssout));
 
    gulp.src(config.boostrapfonts)
        .pipe(gulp.dest(config.fontsout));
 
});
 
//Restore all bower packages
gulp.task('bower-restore', function() {
    bower();
});
 
//Set a default tasks 
gulp.task('default', ['vendor-scripts', 'styles'], function () { });
  

//gulp.task('watch', function(){
//    gulp.watch(config.src, ['scripts']);
//    gulp.watch(config.src, ['styles']);
    
//});