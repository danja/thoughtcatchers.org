/**
 * Comment template.
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */

var PublicModule = (function() {
  "use strict";

  // This is the public interface of the Module.
  var Module = {
    // publicFunction can be called externally
    publicFunction: function() {
      return "publicFunction can be invoked " + "externally but " +
        privateFunction();
    }
  };

  // privateFunction is completely hidden
  // from the outside.
  function privateFunction() {
    return "privateFunction cannot";
  }

  return Module;
}());
