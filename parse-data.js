'use strict';

var os = require('os');

var d = [
  'GET / HTTP/1.1',
  'x-real-ip: 14.142.226.218',
  'x-forwarded-for: 14.142.226.218',
  'host: mxbotfbapptoped.localtunnel.me',
  'x-forwarded-proto: https',
  'x-nginx-proxy: true',
  'connection: close',
  'content-length: 0',
  'cache-control: max-age=0',
  'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
  'upgrade-insecure-requests: 1',
  'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'accept-encoding: gzip, deflate, br',
  'accept-language: en-US,en;q=0.9'
].join(os.EOL);


if (require.main === module) {
  (function() {
    console.log(transform(d));
  })();
}

function transform(data, separator) {
  if (!separator) {
    separator = os.EOL;
  }

  var map = {};
  data.split(separator).map(function(e) {
    var parts = e.split(':');
    if (parts.length > 1) {
      map[parts[0]] = (parts[1] || '').trim();
    }
  });

  return map;
}
