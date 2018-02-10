module.exports = function(api, opts = {}) {
    return {
        presets: [
            require('@babel/preset-env')
        ],
        plugins: [
            require('@babel/plugin-syntax-jsx'),
            require('@babel/plugin-transform-react-display-name'),
            [
                require('@babel/plugin-transform-react-jsx'),
                {
                    pragma: opts.pragma || 'loki.createElement'
                }
            ]
        ]
    };
}
