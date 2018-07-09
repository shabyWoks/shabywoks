const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js/, 
                use: 'babel-loader', 
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        historyApiFallback: true
    },
    mode: 'development'
}