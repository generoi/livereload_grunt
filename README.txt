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

INSTALLATION
------------

1. Install the required grunt tasks.
   `npm install grunt grunt-regarde grunt-contrib-livereload --save-dev`
2. Place and configure the Gruntfile.example.js as Gruntfile.js in your Drupal root.
3. Run: `grunt regarde` within the Drupal tree.
4. Enable the module

CONFIGURATION
-------------

1. Go to admin/people/permissions to give the "User LiveReload" permission to
   selected roles
2. Enable or disable the livereload snippet in admin/config/performance.
