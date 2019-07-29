module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.jsx|js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.png|jpg|jpeg|svg|gif$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.webpack.js',
            '.js',
            '.jsx',
            '.json',
            '.sass',
            'scss',
            'css'
        ]
    }
};
