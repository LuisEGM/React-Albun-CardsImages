const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: "./src/app/index.js",

    output: {
        path: path.join(__dirname,"dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]

}