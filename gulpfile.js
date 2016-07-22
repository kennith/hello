var gulp   = require('gulp');
var less   = require('gulp-less');
var bs     = require('browser-sync');
var concat = require('gulp-concat');

gulp.task('default', ['scripts', 'less', 'css'], function() {

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

gulp.task('scripts', function() {
    var scripts = ['bower_components/jquery/dist/jquery.min.js', 'assets/js/**/*.js']
    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('serve', ['default'], function() {
    var watching = ['app/*.html', 'app/js/*.js'];

    bs.init({
        server: {
            baseDir: "./app"
        },
        ui: false,
        online: false,
        open: false
    })

    gulp.watch('assets/less/*.less', ['less']);
    gulp.watch('assets/css/*.css', ['css']);
    gulp.watch('assets/js/**/*.js', ['scripts']);
    gulp.watch(watching).on('change', bs.reload);
})
