/**
 * Comment template.
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */

var Gallery = (function() {
  "use strict";

  var Gallery = {

    gatherLinks: function(callback) {
      $.get("http://localhost:8080/uploads", function(data) {
        callback(data);
      //  alert( "Load was performed."+JSON.stringify(data,false,4));
      });
    }
  };

  return Gallery;
}());
