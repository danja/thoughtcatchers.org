var path = require('path');

var config = {

    www: path.resolve(__dirname + "/../www/"),
    uploadsPath: path.resolve(__dirname + "/../www/uploads/"),
    accessLog: path.resolve(__dirname + "/../log/access.log")
};
module.exports = config;
