var glob = require("glob");
var config = require("./config");
var utils = require("./utils");
var templates = require("./templates");

var media = {

    /*
  {
"files": [
{ "file": "image.jpg" },
]
}
*/
    listFiles: function (res) {
        console.log("listFiles");

        var preLength = config.www.length;
        var fileList = [];
        var options = {};
      //  console.log("config.uploadsPath = " + config.uploadsPath);

        glob(config.uploadsPath + "/*", options, function (er, files) {
            for(var i = 0; i < files.length; i++) {
              //  console.log("files[i] = " + files[i]);
                var entry = {};
                entry["file"] = files[i].substring(preLength);
                fileList.push(entry);
            }
            var fileMap = {
                "files": fileList
            };
          //  console.log("fileMap = \n" + JSON.stringify(fileMap, false, 4));
            var html = utils.templater(templates.html.fileList, fileMap)

            res.send(html);
        });
    }
};
module.exports = media;
