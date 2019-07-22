const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx|js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css|sass|scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /\.module.sass$/
            },
            {
                test: /\.module.sass|module.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    mode: 'development'
};
