//Utilities
var browserSync = require('browser-sync').create();
var sassdoc = require('sassdoc');

//Gulp
var gulp = require('gulp'),
    useref = require('gulp-useref');

// Gulp plugins
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

//Task options
var input = 'app/scss/*.scss';
var output = 'app/css';
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR'],
    cascade: true
};
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: require('node-normalize-scss').includePaths
};
var sassdocOptions = {
    dest: './app/sassdoc'
};

// ----------------------------
// Gulp task definitions
// ----------------------------
gulp.task('sass', function () {
    // Find all `.scss` files from the `app/scss/` folder
    return gulp.src(input)
        //Starts SourceMaps
        .pipe(sourcemaps.init())
        //Starts Sass and throw an error when something goes wrong 
        .pipe(sass(sassOptions).on('error', sass.logError))
        //Starts autoprefixer with our options
        .pipe(autoprefixer(autoprefixerOptions))
        //Write our Map file to css final destinations
        .pipe(sourcemaps.write("."))
        //Write our destinations files 
        .pipe(gulp.dest(output))
        //Refresh the browser
        .pipe(browserSync.stream());
});

gulp.task('sassdoc', function () {
    // Release the docs! gulp sassdoc
    return gulp
        .src(input)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});

gulp.task('watch', ['sass'], function () {
    browserSync.init({
        server: "./app"
    });
    // Watch the input folder for change,
    // and run `sass` task when something happens
    gulp.watch(input, ['sass'])
    gulp.watch(["app/*.html", "app/js/*.js"]).on('change', browserSync.reload)
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('json', function () {
    return gulp.src('app/json/**/*')
        .pipe(gulp.dest('dist/json'))
});
/*gulp.task('svg', function () {
    return gulp.src('app/img/')
        .pipe(gulp.dest('dist/img'))
});*/

gulp.task('images', function () {
    return gulp.src('./app/img/**/*.+(png|jpg|jpeg|gif|svg)')
        // Not Caching images that ran through imagemin
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('./dist/img'))
});
/*
PENDING CACHE, CHECK VERSIONS, UPDATE GULP-CACHE

.pipe(cache(imagemin({
      interlaced: true
    })))
    */

gulp.task('clean:dist', function () {
    return del.sync('dist');
})

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
})

gulp.task('useref', function () {
    return gulp.src('app/index.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify().on('error', function(e){
            console.log(e);
        })))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('userefscripts', ['clean'], function () {
    return gulp.src('js/*.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
        }))
        .pipe(gulp.dest('minjs'));
});

/* PENDING INTEGRATE MINIFY INDEX TO PRODUCTION */
gulp.task('minifyIndex', function () {
    return gulp.src('dist/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('prod', function (callback) {
    runSequence('clean:dist', ['json','sassdoc', 'useref', 'images'],
        callback
    )
})

gulp.task('default', ['sass', 'watch' /*, possible other tasks... */ ]);

gulp.task('defaultTest', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
})
