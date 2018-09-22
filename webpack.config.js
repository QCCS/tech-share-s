module.exports = {
    entry: __dirname + '/src/index.js',//入口文件
    output: {
        path: __dirname + '/dist',//打包后的文件位置
        filename: 'index.js'//打包后的文件
    },
    target: 'node',
    module: {
        rules: [
        ]
    },
    plugins: [
    ]
}
