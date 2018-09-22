/**
 * Created by zhouli on 18/9/22
 */
var chokidar = require('chokidar');
//引入子进程模块，调用命令
var process = require('child_process');
chokidar.watch('./src').on('all', (event, path) => {
    // console.log(event, path);
    console.log("改变了1")
    process.exec('node_modules/.bin/webpack',function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        console.log(stdout)
        console.log(stderr)
    });
});