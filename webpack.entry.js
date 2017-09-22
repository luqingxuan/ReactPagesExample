const glob = require('glob');

// ------------------------------------------------------------------------------

// polyfill
var polyfillEntries = [{
    id: 'polyfill',
    contains: ['./src/js/polyfill/index.js']
}];

// ------------------------------------------------------------------------------

// plugins
var pluginEntries = [{
    id: 'plugins/part-1',
    contains: ['./src/js/plugins/part-1.js']
}, {
    id: 'plugins/part-2',
    contains: ['./src/js/plugins/part-2.js']
}];

// ------------------------------------------------------------------------------

// pages
var pageEntries = [];

// E:\ --> E:/
var projectPath = __dirname.replace(/\\/g, '/'),
    pagePath = '/src/js/pages/';

glob.sync(projectPath + pagePath + '**/*.jsx').forEach(function(filePath) {
    // filePath = E:/ReactPagesExample/src/js/pages/index.jsx

    // E:/ReactPagesExample/src/js/pages/index.jsx -> /src/js/pages/index.jsx
    var entry = filePath.replace(projectPath, '');

    // E:/ReactPagesExample/src/js/pages/index.jsx --> index.jsx
    var id = filePath.replace(projectPath + pagePath, '');

    // 后缀 index.jsx --> index
    id = id.replace(/\.jsx$/, '');

    pageEntries.push({
        id: id,
        contains: ['.' + entry]
    });

});

// ------------------------------------------------------------------------------

// react
var reactEntries = [];

reactEntries.push({
    id: 'react',
    contains: ['expose-loader?React!react', 'expose-loader?ReactDOM!react-dom']
});

reactEntries.push({
    id: 'react-platform',
    contains: [
        'react-router',
        'react-router-dom',
        'redux',
        'react-redux',
        'react-router-redux',
        'redux-actions',
        'redux-thunk',
        'redux-promise',
        'redux-saga'
    ]
});

// ------------------------------------------------------------------------------

const entries = {};

const commonEntries = ['manifest'];

for (var it of polyfillEntries) {
    commonEntries.push(it.id);

    entries[it.id] = it.contains;
}

commonEntries.push('jquery');
entries['jquery'] = ['expose-loader?$!expose-loader?jQuery!jquery'];

commonEntries.push('moment');
entries['moment'] = ['expose-loader?moment!moment'];

for (var it of reactEntries) {
    commonEntries.push(it.id);

    entries[it.id] = it.contains;
}

for (var it of pluginEntries) {
    commonEntries.push(it.id);

    entries[it.id] = it.contains;
}

for (var it of pageEntries)
    entries[it.id] = it.contains;

module.exports = {
    entries: entries,
    pageEntries: pageEntries,
    commonEntries: commonEntries
}
