var fs = require("fs");
var http = require("http");
var express = require("express");
// var connect = require("connect");
// gzip/deflate outgoing responses
var compression = require("compression");
var bodyParser = require("body-parser");
var favicon = require("serve-favicon");
// logger
var morgan = require("morgan");
var serveIndex = require("serve-index");
var serveStatic = require("serve-static");
var auth = require('http-auth');

var config = require("./config");
var media = require("./media");

var basic = auth.basic({
    realm: "thoughtcatchers",
    file: __dirname + "/../data/users.htpasswd"
});

var app = express();
var router = express.Router();

app.use(auth.connect(basic));
// app.use(favicon(www + "favicon.ico"));

/*
app.use("/", serveIndex(config.www, {
    "icons": true
}));
*/

app.use(compression());

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded());

// logger
var accessLogStream = fs.createWriteStream(config.accessLog, {
    flags: "a"
});

/*
app.use(morgan("combined", {
    stream: accessLogStream
}));
*/

app.use(serveStatic(config.www));

app.use("/", router);

router.get("/uploads", function (req, res, next) {
    // console.log("uploads");
    media.listFiles(res);
    next();
});



/*
"index": ["/index.html"],
"about": ["/about.html"],
"contact": ["/contact.html"]
*/

/*
app.use("/", router);

router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});
*/

/*
router.get("/about", function (req, res) {
    res.sendFile(path + "about.html");
});

router.get("/contact", function (req, res) {
    res.sendFile(path + "contact.html");
});
*/

/* catch all
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});
*/
/*
router.use(function (req, res, next) {
    // console.log("/" + req.method);
    next();
});
*/



console.log("serving on port " + config.port);
//create node.js http server and listen on port
http.createServer(app).listen(config.port);
