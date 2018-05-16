const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');

const config = {
    mode: "development",
    entry: {
        main:'./src/app.js',
        qwe:'./src/components/layer/qwe.js'
    },
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader",

                        'postcss-loader',
                        {
                            loader: "less-loader"
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }},
                        'postcss-loader'
                    ]
                })

            },

        ]
    },
    plugins: [
        require('precss'),
        require('autoprefixer'),
        new uglify(),
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name]-[chunkhash].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};

module.exports = config;