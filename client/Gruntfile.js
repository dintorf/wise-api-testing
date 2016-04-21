// Grunt tasks

module.exports = function (grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
			'* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
			'* @author <%= pkg.author %>\n' +
			'*/\n',
		yeoman: {
	      // configurable paths
	      app: require( './bower.json' ).appPath || 'app',
	      dist: 'dist',
	      server: '../server',
	      bower: 'src/bower_components'
	    },
		clean: {
			dist: ['<%= yeoman.dist %>']
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			app: {
				src: ['app/modules/**/*.js']
			}
		},

		exec: {
			bowerInstaller: 'bower-installer'
		},

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: false
			},
			base: {
				src: [
					// Angular Project Dependencies,
					'app/app.js',
					'app/app.config.js',
					'app/modules/**/*Module.js',
					'app/modules/**/*Route.js',
					'app/modules/**/*Ctrl.js',
					'app/modules/**/*Service.js',
					'app/modules/**/*Directive.js'
				],
				dest: '<%= yeoman.dist %>/scripts/<%= pkg.name %>-appbundle.js'
			},
			build: {
				src: [
					// Angular Project Dependencies,
					'<%= yeoman.bower %>/es5-shim/es5-shim.min.js',
					'<%= yeoman.bower %>/json3/lib/json3.min.js',
					'<%= yeoman.bower %>/angular/angular.min.js',
					'<%= yeoman.bower %>/angular-resource/angular-resource.min.js',
					'<%= yeoman.bower %>/angular-aria/angular-aria.min.js',
					'<%= yeoman.bower %>/angular-mocks/angular-mocks.min.js',
					'<%= yeoman.bower %>/angular-cookies/angular-cookies.min.js',
					'<%= yeoman.bower %>/angular-animate/angular-animate.min.js',
					'<%= yeoman.bower %>/angular-sanitize/angular-sanitize.min.js',
					'<%= yeoman.bower %>/angular-ui-router/release/angular-ui-router.min.js',
					'<%= yeoman.bower %>/angular-material-icons/angular-material-icons.min.js',
					'<%= yeoman.bower %>/angular-messages/angular-messages.min.js',
					'<%= yeoman.bower %>/angular-material/angular-material.min.js'

				],
				dest: '<%= yeoman.dist %>/scripts/<%= pkg.name %>-angularbundle.min.js'
			}
		},

		uglify: {
			options: {
				banner: '<%= banner %>',
				report: 'min'
			},
			base: {
				src: ['<%= concat.base.dest %>'],
				dest: '<%= yeoman.dist %>/scripts/<%= pkg.name %>-appbundle.min.js'
			},
			basePlugin: {
				src: [ 'src/plugins/**/*.js' ],
				dest: '<%= yeoman.dist %>/scripts/plugins/',
				expand: true,
				flatten: true,
				ext: '.min.js'
			}
		},

		connect: {
			server: {
				options: {
					keepalive: true,
					port: 4000,
					base: '.',
					hostname: 'localhost',
					debug: true,
					livereload: true,
					open: true
				}
			}
		},
		concurrent: {
			tasks: ['connect', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},

		watch: {
			app: {
				files: '<%= jshint.app.src %>',
				tasks: ['jshint:app'],
				options: {
					livereload: true
				}
			}
		},

		injector: {
			options: {},
			dev: {
				files: {
					'index.html': [
						'bower.json',
						'app/app.js',
            			'app/app.config.js',
						'app/modules/**/*Module.js',
						'app/modules/**/*Route.js',
						'app/modules/**/*Ctrl.js',
						'app/modules/**/*Service.js',
						'app/modules/**/*Directive.js'
					]
				}
			},
			production: {
				files: {
					'index.html': [
						'<%= yeoman.dist %>/styles/**/*.css',
						'<%= yeoman.dist %>/scripts/wiseagent-angularbundle.min.js',
						'<%= yeoman.dist %>/scripts/wiseagent-appbundle.min.js',
						'<%= yeoman.dist %>/scripts/templates.js'
					]

				}
			}
		},

		ngtemplates: {
			app: {
				src: 'app/modules/**/*.html',
				dest: '<%= yeoman.dist %>/scripts/templates.js',
				options: {
					module: '<%= pkg.name %>',
					root: 'app/',
					standAlone: false
				}
			}
		},

	    loopback_sdk_angular: {
	      services: {
	        options: {
	          ngModuleName: 'LoopBack',
	          input: '<%= yeoman.server %>/server.js',
	          output: '<%= yeoman.app %>/modules/shared/services/loopbackService.js'
	        }
	      }
	    }
	});

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	// Making grunt default to force in order not to break the project if something fail.
	grunt.option('force', true);

	// Register grunt tasks
	grunt.registerTask("build", [
		"clean",
		"jshint",
		"exec",
		"concat",
		"uglify",
		"ngtemplates",
		"injector:production",
		"concurrent"
	]);

	// LoopBack task
	grunt.registerTask('loopback', ['loopback_sdk_angular']);

	// Development task(s).
	grunt.registerTask('dev', ['injector:dev', 'concurrent']);

};
