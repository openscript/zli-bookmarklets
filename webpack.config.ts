import * as webpack from "webpack";

const config: webpack.Configuration = {
    entry: {
        informAboutAbsentee: 'informAboutAbsentee.ts'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}

export default config;
