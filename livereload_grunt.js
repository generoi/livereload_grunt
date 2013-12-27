(function(d, r) {
  var g = d.createElement('script'),
      s = d.scripts[0],
      host = location.host.split(':')[0],
      crc = r.crc || r.returnExports,
      // Logic duplicated in Gruntfile.js
      generatePort = function(host) {
        var port = host;
        do {
          port = ('' + crc.crc32(port)).slice(-5);
        } while (port < 1024 || port > 65535);
        return port;
      };

  g.src = '//' + host + ':' + generatePort(host) + '/livereload.js?snipver=1';
  s.parentNode.insertBefore(g, s);
}(document, window));
