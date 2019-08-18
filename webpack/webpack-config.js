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
            '.scss',
            '.css'
        ]
    }
};
