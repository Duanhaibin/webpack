const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
    mode: "development",
    entry: './src/app.js',
    output: {
        filename: "js/[name]-[chunkhash].js",
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    },
                    'postcss-loader',
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        },
                    },
                    'postcss-loader'
                ]
            },

        ]
    },
    plugins: [
        require('precss'),
        require('autoprefixer'),

        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};

module.exports = config;