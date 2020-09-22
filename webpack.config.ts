import webpack from "webpack";
import path from "path";
import BookmarkletPagePlugin from './plugins/bookmarkletPagePlugin';

const BookmarkletWrapperPlugin = require('bookmarklet-wrapper-webpack-plugin');

const config: webpack.Configuration = {
    entry: {
        informAboutAbsentee: './src/informAboutAbsentee.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new BookmarkletWrapperPlugin(),
        new BookmarkletPagePlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ]
}

export default config;
