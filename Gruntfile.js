'use strict';

module.exports = function (grunt){
	
	// Time how long the task takes
	require('time-grunt')(grunt);

	// Automatically load grunt tasks
	require('jit-grunt')(grunt);

	// Define the configuration for all tasks
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/styles.css': 'css/styles.scss'
				}
			}
		},
		watch: {
			files: 'css/*.scss',
			tasks: ['sass']
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'css/*.css',
						'*.html',
						'js/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}	
		}
	});

	grunt.registerTask('css', ['sass']);
	grunt.registerTask('default', ['browserSync', 'watch']);
};
