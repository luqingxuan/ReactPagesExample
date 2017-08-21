let entries = [];

entries.push({
    id: 'react',
    contains: ['expose-loader?React!react', 'expose-loader?ReactDOM!react-dom']
});

entries.push({
    id: 'react-platform',
    contains: ['expose-loader?ReactRouter!react-router', 'expose-loader?ReactRouterDOM!react-router-dom', 'expose-loader?Redux!redux', 'expose-loader?ReactRedux!react-redux',
        'expose-loader?ReactRouterRedux!react-router-redux', 'redux-thunk', 'redux-saga'
    ]
});

module.exports = entries;
