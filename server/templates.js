// var path = require('path');

var templates = {

    html: {
        fileList: "\n\
   <h4>Files</h4> \n\
   <p> \n\
      <ul> \n\
         ~{#files}~ \n\
            <li><a href='~{file}~' class='file' data-dialog>~{file}~</a></li> \n\
         ~{/files}~ \n\
      </ul> \n\
   </p>"
    },

    sparql: {}

};
module.exports = templates;
