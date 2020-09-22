import webpack from "webpack";
import path from "path";

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
        new BookmarkletWrapperPlugin()
    ]
}

export default config;
