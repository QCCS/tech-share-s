let externals = _externals();
module.exports = {
    entry: __dirname + '/src/index.js',//入口文件
    output: {
        path: __dirname + '/dist',//打包后的文件位置
        filename: 'index.js'//打包后的文件
    },
    target: 'node',
    // devtool : "cheap-module-eval-source-map",
    externals: externals,
    module: {
        rules: [
        ]
    },
    plugins: [
    ]
}
//外部依赖，不要打包进来
function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}