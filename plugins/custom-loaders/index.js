module.exports = function (context, options) {
    return {
        name: 'custom-loaders',
        configureWebpack(config, isServer) {
            return {
                module: {
                    rules: [
                        {
                            test: /\.(tsx|jsx|ts|js)?$/,
                            use: "babel-loader"
                        }
                    ],
                },
            };
        },
    };
};