'use strict';
var path = require('path')
  , crc = require('crc')
  , generatePort = function(host) {
    var port = host;
    do {
      port = ('' + crc.crc32(port)).slice(-5);
    } while (port < 1024 || port > 65535);
    return port;
  }
  // For wildcard subdomains which map dir/subdir -> subdir.dir.example.org
  // , host = [dirs[1], dirs[0], 'example.org'].join('.');
  , host = 'example.org';

module.exports = function(grunt) {
  grunt.initConfig({
    livereload: {
      port: generatePort(host),
    },
    regarde: {
      css: {
        files: 'sites/all/themes/adaptivetheme/at_subtheme/css/*.css',
        tasks: ['livereload']
      }
    }
  });
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.registerTask('default', ['livereload-start', 'regarde']);
};
