module.exports = function check(str, bracketsConfig) {
    for (var i = str.length; i >= 0; i--) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            var same = bracketsConfig[j].join('');
            if (str.includes(same)) {
                str = str.replace(same, '');
            }
        }
        if (str.length === 0) {
            return true;
        }
    }
    return str === "";
}