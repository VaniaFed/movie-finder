const path = require('path');
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.css$/,
                loader:
                    'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
                include: path.join(__dirname, 'node_modules'),
                exclude: /flexboxgrid/
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
};
