Livereload Grunt
================

DESCRIPTION
-----------

This is a simple alternative to livereload (http://drupal.org/project/livereload)
with the functionality of using unique ports depending on host. This is useful
for dev-environments where multiple developers share the same database but use
a different code base. In our own environment we map user-directories and their
child directories into valid urls with wildcard vhosts in apache.

For example /var/www/<USER>/<SUBDIR> -> http://<SUBDIR>.<USER>.example.org

This used node-crc (https://github.com/alexgorbatchev/node-crc) both in Grunt
and in the browser. Currently it's shipped as is.

INSTALLATION
------------

1. Install the required grunt tasks.
   `npm install grunt-contrib-watch crc --save-dev`
2. Place and configure the Gruntfile.example.js as Gruntfile.js in your Drupal root.
3. Install https://github.com/alexgorbatchev/node-crc in sites/all/libraries/node-crc
   `git submodule add git@github.com:alexgorbatchev/node-crc.git sites/all/libraries/node-crc`
4. Enable the module
5. Run `grunt watch` within the Drupal tree.

CONFIGURATION
-------------

1. Go to admin/people/permissions to give the "User LiveReload" permission to
   selected roles
2. Enable or disable the livereload snippet in admin/config/performance.
