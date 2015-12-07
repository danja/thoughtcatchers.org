/**
 * Comment template.
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */

var Gallery = (function () {
    "use strict";

    var Gallery = {

        gatherLinks: function (callback) {
            var request = $.ajax({
                    url: "/uploads",
                });

                request.done(function (data) {
                    callback(data);
                });
                request.fail(function (jqXHR, textStatus) {
                    console.log("Request failed: " + textStatus);
                });

        }
    };
    return Gallery;
}());
