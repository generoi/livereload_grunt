'use strict';

var path = require('path')
  , crc = require('crc')
  , dirs = __dirname.split('/').slice(-2)
  // The host of this site, eg. musch-glob.oxy.minasanor.genero.fi
  , host = dirs.reverse().concat(['minasanor.genero.fi']).join('.')
  , generatePort = function (host) {
    var port = host;
    do {
      port = ('' + crc.crc32(port)).slice(-5);
    } while (port < 1024 || port > 65535);
    return port.replace(/^0+/, '');
  };

module.exports = function(grunt) {
  grunt.initConfig({
    meta: {
      themeDir: 'sites/all/themes/v3',
      modulesDir: 'sites/all/modules/custom'
    },
    watch: {
      livereload: {
        files: [
          '<%= meta.themeDir %>/css/*.css',
          '<%= meta.themeDir %>/js/*.js',
          '<%= meta.themeDir %>/{templates,inc}/**',
          '<%= meta.themeDir %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: {
            port: generatePort(host)
          }
        }
      }
    }
  });

  Object.keys(require('./package.json').devDependencies).forEach(function(dep) {
    if (dep.substring(0,6) === 'grunt-' && dep !== 'grunt-cli') grunt.loadNpmTasks(dep);
  });
};
