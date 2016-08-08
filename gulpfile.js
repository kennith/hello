var gulp       = require('gulp');
var less       = require('gulp-less');
var bs         = require('browser-sync');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');
var del        = require('del');
var cleanCSS   = require('gulp-clean-css');

// Configuration
var dist     = 'dist';
var app      = 'app';
var scripts  = ['bower_components/jquery/dist/jquery.min.js', 'assets/js/**/*.js'];
var watching = ['app/*.html', 'app/js/*.js', 'app/css/*.css'];
var fonts    = ['bower_components/font-awesome/fonts/**'];

gulp.task('dist', ['clean:dist', 'generate-service-worker'], function() {

    gulp.src('app/*')
        .pipe(gulp.dest(dist));

    gulp.src('assets/less/app.less')
            // .pipe(minify())
            .pipe(sourcemaps.init())
            .pipe(less({compress: true}).on('error', errorHandler))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dist + '/css/'))

    gulp.src('assets/css/*.css')
            .pipe(cleanCSS())
            .pipe(concat('all.css'))
            // .pipe(uglify())
            .pipe(gulp.dest(dist + '/css/'));

    gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist + '/js/'));

    gulp.src(fonts)
        .pipe(gulp.dest(dist + '/fonts/'));

    return true;
        // .pipe(['less:dist', 'scripts:dist', 'css:dist']);
});

gulp.task('clean:dist', function() {
    return del(dist);
})

gulp.task('default', ['scripts', 'less', 'css', 'font'], function() {
})

function errorHandler(e) {
    console.log(e.message.toString());
    this.emit('end');
}

gulp.task('less', function() {
    return gulp.src('assets/less/app.less')
        .pipe(less().on('error', errorHandler))
        .pipe(gulp.dest('app/css/'))
        .pipe(bs.stream());
});

gulp.task('css', function() {
    return gulp.src('assets/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('font', function() {
    return gulp.src(fonts)
        .pipe(gulp.dest('app/fonts'));
})

gulp.task('scripts', function() {
    // only include SW in the build
    var scripts  = ['bower_components/jquery/dist/jquery.min.js', 'assets/js/*.js'];
    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('serve', ['default'], function() {

    bs.init({
        server: {
            baseDir: "./app"
        },
        ui: false,
        online: false,
        open: false
    })

    gulp.watch('assets/less/*.less', ['less']);
    gulp.watch('assets/css/*.css',   ['css']);
    gulp.watch('assets/js/**/*.js',  ['scripts']);
    gulp.watch(watching).on('change', bs.reload);
})

// Reference: https://github.com/GoogleChrome/sw-precache
function generateSW() {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'app';

    console.log('generate sw.');
    swPrecache.write(path.join(rootDir, 'service-worker.js'), {
        staticFileGlobs: [rootDir + '/**/*.{html,js,css,eot,svg,ttf,woff,woff2}'],
        stripPrefix: rootDir,
        replacePrefix: '/hello'
    });
}

gulp.task('generate-service-worker', function() { generateSW(); })
