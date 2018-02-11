module.exports = function(api, opts = {}) {
    return {
        plugins: [
            require('@babel/plugin-syntax-jsx'),
            [
                require('@babel/plugin-transform-react-jsx'),
                {
                    pragma: opts.pragma || 'loki.createVirtualNode'
                }
            ]
        ]
    };
}
