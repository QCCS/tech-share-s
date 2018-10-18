// 安装步骤
var exec = require('child_process').exec;
let args = process.argv.splice(2);
let commandName = args[0];

// 安装依赖
var init = 'npm i --no-package-lock';

// 建议先脚本创建数据库 sequelize创建数据库之后，需要修改字符集
var mysqlCreate = 'mysql -uroot -pmac123 -f -e "create database IF NOT EXISTS tech_share_prod DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci"';
// mysql
// 直接导入sql逻辑备份文件
var mysqlSource = 'mysql -uroot -pmac123 -f -e "source src/tech_share_prod.sql"';

// dev 通过迁移文件 migrate
var sequlizeDevDB = 'node_modules/.bin/sequelize db:create';
var sequlizeDevTable = 'node_modules/.bin/sequelize db:migrate';

// prod 通过迁移文件 migrate
var sequlizeProdDB = 'NODE_ENV=production node_modules/.bin/sequelize db:create';
var sequlizeProdTable = 'NODE_ENV=production node_modules/.bin/sequelize db:migrate';

// 填充数据
var seedDataDev = 'node_modules/.bin/sequelize db:seed:all';
var seedDataProd = 'NODE_ENV=production node_modules/.bin/sequelize db:seed:all';
/*
* 注意
* 1.只有对应的表创建了 migrate，运行命令才能创建表
* 2.migrate 只能创建表结构，数据库里面已有的数据不会创建
* */

// node
// dev 打包
var buildDev = 'npm run webpack';
var runDev = 'npm run dev';

// prod 打包
var buildProd = 'npm run webpackProd';
var runProd = 'npm run superdev';


var commandJson = {
    init,
    mysqlCreate,
    mysqlSource,
    sequlizeDevDB,
    sequlizeDevTable,
    sequlizeProdDB,
    sequlizeProdTable,
    seedDataDev,
    seedDataProd,
    buildDev,
    runDev,
    buildProd,
    runProd,
}
var commandJsonExplain = {
    init: "安装依赖",
    mysqlCreate: "shell创建数据库",
    mysqlSource: "直接导入sql文件",
    sequlizeDevDB: "sequlize创建dev数据库",
    sequlizeDevTable: "sequlize创建dev数据表",
    sequlizeProdDB: "sequlize创建生产数据库",
    sequlizeProdTable: "sequlize创建生产数据表",
    seedDataDev: "dev填充数据",
    seedDataProd: "prod填充数据",
    buildDev: "打包开发环境",
    runDev: "打包开发环境",
    buildProd: "打包生产环境",
    runProd: "运行生产环境",
}
//运行命令
runCommand(commandName);

function runCommand(command) {
    var sh = commandJson[command];
    if (sh) {
        console.log("运行：" + commandJson[command]);
        //return refrence to the child process
        return exec(sh, function (err, stdout, stderr) {
            if (err) {
                console.log("err " + err);
                console.log("stderr " + stderr);
            }
            console.log(stdout);
        });
    } else {
        console.log("找不到定义的命令，请从下面命令选择");
        for (let key in commandJson) {
            console.log(commandJsonExplain[key]+"，请运行：node install " + key);
        }
    }

}
