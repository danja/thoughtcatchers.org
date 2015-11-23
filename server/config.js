var path = require('path');

var config = {

    port: 8080,
    uploaderPort: 8082,
    www: path.resolve(__dirname + "/../www/"),
    uploadsPath: path.resolve(__dirname + "/../www/uploads/"),
    accessLog: path.resolve(__dirname + "/../log/access.log")
};
module.exports = config;
