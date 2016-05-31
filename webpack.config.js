module.exports = {
    entry:[
        './src/index.js'
    ],
    output: {
        path: __dirname + '/build/',
        publicPath: "/build/",
        filename: 'app.js'
    }
};