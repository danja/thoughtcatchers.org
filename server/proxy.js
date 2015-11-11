var proxyPort = 80;
var http = require('http');
var httpProxy = require('http-proxy');

var options = {
    router: {
        'hyperdata.it': 'localhost:8080',
        'thoughtcatchers.org': 'localhost:8081'
    }
};
console.log('Proxy Routing:')
console.log(options);
console.log();

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(proxyPort);
console.log('Proxy listening on port ' + proxyPort);
