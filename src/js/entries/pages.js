const glob = require('glob');

let entries = [];

let srcRegExp = new RegExp('src/js/pages/');

glob.sync('src/js/pages/**/*.jsx').forEach(function(name) {

    // 前缀
    let key = name.replace(srcRegExp, '');

    // 后缀
    key = key.replace(/\.jsx$/, '');

    entries.push({
        id: key,
        contains: ['./' + name]
    });

});

module.exports = entries;
