(function(d) {
  var g = d.createElement('script'),
      s = d.scripts[0],
      host = location.host.split(':')[0],
      hash = crc.crc32(host),
      // Logic duplicated in Gruntfile.js
      port = ('' + hash).slice(-5);

  g.src = '//' + host + ':' + port + '/livereload.js?snipver=1';
  s.parentNode.insertBefore(g, s);
}(document));
