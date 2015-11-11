var proxyPort = 80;
var http = require('http');
var httpProxy = require('http-proxy');

var options = {
    router: {
        'hyperdata.it': '127.0.0.1:8080',
        'thoughtcatchers.org': '127.0.0.1:8081'
    }
};
console.log('Proxy Routing:')
console.log(options);
console.log();

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(proxyPort);
console.log('Proxy listening on port ' + proxyPort);
