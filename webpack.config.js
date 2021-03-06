const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({ path: '.env.test'});
} else if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'ci'){
    require('dotenv').config({ path: '.env.development'});
}
module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { 
                    test: /\.js$/, 
                    use: 'babel-loader', 
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE__PROJECT_ID': JSON.stringify(process.env.FIREBASE__PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE__MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE__MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/',
            historyApiFallback: true
        }
    }
}