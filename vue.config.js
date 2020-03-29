const path = require('path');

module.exports = {
    configureWebpack: {
    },
    publicPath: '/hello',
    outputDir: path.resolve(__dirname, "docs"),
}