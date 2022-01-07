const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if(process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],


    devtool: 'source-map',
    devServer: {
        static: "./dist",
        hot: true
    },
};