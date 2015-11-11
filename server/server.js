var fs = require("fs");
var http = require("http");
var connect = require("connect");
// gzip/deflate outgoing responses
var compression = require("compression");
var bodyParser = require("body-parser");
var favicon = require("serve-favicon");
// logger
var morgan = require("morgan");
var serveIndex = require("serve-index");
var serveStatic = require("serve-static");
var auth = require('http-auth');

var www = __dirname + "/../www/";


var basic = auth.basic({
    realm: "thoughtcatchers",
    file: __dirname + "/../data/users.htpasswd" //
});

var app = connect();

app.use(auth.connect(basic));
// app.use(favicon(www + "favicon.ico"));

// app.use("/", serveIndex(www, {"icons": true}));

app.use(compression());

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded());

// logger
var accessLogStream = fs.createWriteStream(__dirname + "/access.log", {flags: "a"});

app.use(morgan("combined", {stream: accessLogStream}));

app.use(serveStatic(www, {"index": ["index.html"]}));

//create node.js http server and listen on port
http.createServer(app).listen(8081);
