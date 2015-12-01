/* jQuery logging utility
usage : e.g. $("#thing").log()
found via http://stackoverflow.com/questions/13974740/how-do-i-console-log-a-jquery-dom-element-in-chrome
*/
$.fn.log = function (max) {
    max = (max == null ? 15 : Math.max(max, 0));

    var arr = this.slice(0, max).toArray();

    for(var i = 1; i < arr.length; i += 2) {
        arr.splice(i, 0, ",");
    }

    arr.unshift("<jQuery> length %".replace("%", this.length), "[");

    if(this.length > max) {
        if(max > 0) {
            arr.push(",");
        }
        arr.push("(% more)".replace("%", this.length - max));
    }

    arr.push("]");

    console.log.apply(console, arr);

    return this;
};
