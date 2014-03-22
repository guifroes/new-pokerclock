module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower_concat: {
      all: {
        dest: './app/assets/bower_components.js'
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'app/*',
            '!app/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    compass: {
      options: {
        sassDir: './app/styles',
        cssDir: 'app/styles',
        imagesDir: 'app/images',
        javascriptsDir: 'app/js',
        fontsDir: 'app/styles/fonts',
        importPath: 'app/components',
      },
      dist: {},
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    concat: {
      scripts: {
        dest: './app/assets/app.js',
        src: [

        ]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      assets: {
        files: [
          'app/styles/**/*.css',
          'app/js/**/*.js',
          'app/*.html',
          'app/views/**/*.html'
        ]
      },
      karma: {
        files: ['app/js/**/*.js', 'test/unit/**/*.js'],
        tasks: ['karma:unit:run'] //NOTE the :run flag
      },
    },

    connect: {
      options: {
        base: 'app/'
      },
      devserver: {
        options: {
          port: 8888
        }
      }
    },

    open: {
      devserver: {
        path: 'http://localhost:8888'
      }
    },

    karma: {
      unit: {
        configFile: './karma.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unit_auto: {
        configFile: './karma.conf.js',
        autoWatch: true,
        singleRun: false
      }
    }


  });
  grunt.registerTask('test', ['test:unit']);
  grunt.registerTask('test:unit', ['karma:unit']);

  grunt.registerTask('update', ['bower_concat', 'concat']);

  //defaults
  grunt.registerTask('default', ['dev']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  //
  //development
  grunt.registerTask('dev', ['clean:server', 'compass:server', 'update',  'connect:devserver', 'open:devserver', 'watch:assets']);
};
