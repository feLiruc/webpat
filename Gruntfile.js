module.exports = function(grunt) {

	grunt.initConfig({

		uglify: {
			options: {
				mangle: false
			},

			my_target: {
				files: [{
					expand: true, 
					cwd: 'dev/js', 
					src: '*.js', 
					dest: 'js', 
					ext: '.min.js'
				}]
			}
		}, // uglify

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true, 
					cwd: 'dev/css', 
					src: '*.sass', 
					dest: 'css', 
					ext: '.min.css'
				}]
			}
		}, // sass

		watch: {
			options: {
				livereload: 1337
			},
			dist: {
				files: [
					'dev/css/**/*',
					'dev/img/**/*',
					'dev/jade/**/*',
					'dev/js/**/*',
				],

				tasks: ['uglify', 'imagemin', 'sass', 'jade']
			}
		}, // watch

		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					// Set to true to enable the following options…
					expand: true,
					// cwd is 'current working directory'
					cwd: 'dev/img/',
					src: '*.png',
					// Could also match cwd line above. i.e. project-directory/img/
					dest: 'img',
					ext: '.min.png'
				}]
			}
		}, // imagemin

		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					expand: true, 
					cwd: 'dev/jade', 
					src: '*.jade', 
					dest: '', 
					ext: '.html'
				}]
			}
		} // jade
	});



	// Plugins do Grunt
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jade');


	// Tarefas que serão executadas
	grunt.registerTask('default', ['uglify', 'imagemin', 'sass', 'jade']);

	grunt.registerTask('w', ['watch']);

};