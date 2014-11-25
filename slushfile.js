var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    inquirer = require('inquirer');

gulp.task('default', ['gen']);

gulp.task('gen', function(done) {
    inquirer.prompt([{
        type: 'input',
        name: 'moduleName',
        message: 'What is your AngularJS module name?'
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }], function(answers) {
        if (!answers.moveon) {
            return done();
        }
        gulp.src(__dirname + '/templates/src/angular/*.js')
            .pipe(template(answers))
            .pipe(conflict('./src/angular'))
            .pipe(gulp.dest('./src/angular'));

        gulp.src(__dirname + '/templates/src/index.html')
            .pipe(template(answers))
            .pipe(conflict('./src'))
            .pipe(gulp.dest('./src'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('controller', function(done) {
    inquirer.prompt([{
        type: 'input',
        name: 'moduleName',
        message: 'What is your AngularJS module name?'
    }, {
        type: 'input',
        name: 'controllerName',
        message: 'What is the name of your controller?'
    }], function(answers) {
        if (answers.length < 1) {
            return done();
        }
        gulp.src(__dirname + '/templates/src/angular/controllers/NewController.js')
            .pipe(template(answers))
            .pipe(rename(answers.controllerName + '.js'))
            .pipe(conflict('./src/angular/controllers'))
            .pipe(gulp.dest('./src/angular/controllers'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('service', function(done) {
    inquirer.prompt([{
        type: 'input',
        name: 'moduleName',
        message: 'What is your AngularJS module name?'
    }, {
        type: 'input',
        name: 'serviceName',
        message: 'What is the name of your service?'
    }], function(answers) {
        if (answers.length < 1) {
            return done();
        }
        gulp.src(__dirname + '/templates/src/angular/services/NewService.js')
            .pipe(template(answers))
            .pipe(rename(answers.serviceName + '.js'))
            .pipe(conflict('./src/angular/services'))
            .pipe(gulp.dest('./src/angular/services'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('directive', function(done) {
    inquirer.prompt([{
        type: 'input',
        name: 'moduleName',
        message: 'What is your AngularJS module name?'
    }, {
        type: 'input',
        name: 'directiveName',
        message: 'What is the name of your directive?'
    }], function(answers) {
        if (answers.length < 1) {
            return done();
        }
        gulp.src(__dirname + '/templates/src/angular/directives/NewDirective.js')
            .pipe(template(answers))
            .pipe(rename(answers.directiveName + '.js'))
            .pipe(conflict('./src/angular/directives'))
            .pipe(gulp.dest('./src/angular/directives'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('factory', function(done) {
    inquirer.prompt([{
        type: 'input',
        name: 'moduleName',
        message: 'What is your AngularJS module name?'
    }, {
        type: 'input',
        name: 'factoryName',
        message: 'What is the name of your factory?'
    }], function(answers) {
        if (answers.length < 1) {
            return done();
        }
        gulp.src(__dirname + '/templates/src/angular/factories/NewFactory.js')
            .pipe(template(answers))
            .pipe(rename(answers.factoryName + '.js'))
            .pipe(conflict('./src/angular/factories'))
            .pipe(gulp.dest('./src/angular/factories'))
            .on('finish', function() {
                done();
            });
    });
});
