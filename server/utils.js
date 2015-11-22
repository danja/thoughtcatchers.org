var hogan = require('hogan');

var utils = {

    templater: function(raw, replacementMap) {
      var template = hogan.compile(raw, {
          delimiters: '~{ }~'
      });
      return template.render(replacementMap);
      // return htmlUnescape(result);
}
}
module.exports = utils;
