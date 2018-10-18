// 安装步骤

// 安装依赖
var install = "npm i --no-package-lock";

// mysql
// 直接导入sql逻辑备份文件
var mysqlSource = 'mysql -uroot -pmac123 -f -e "source tech_share_prod.sql"';

// dev 通过迁移文件 migrate
var sequlizeDevDB ='../node_modules/.bin/sequelize db:create';
var sequlizeDevTable ='../node_modules/.bin/sequelize db:migrate';

// prod 通过迁移文件 migrate
var sequlizeProdDB ='NODE_ENV=production ../node_modules/.bin/sequelize db:create';
var sequlizeDevTable ='NODE_ENV=production ../node_modules/.bin/sequelize db:migrate';

// node
// dev 打包
var buildDev = "npm run webpack";
var runDev = "npm run dev";

// prod 打包
var buildProd = "npm run webpackProd";
var runProd = "npm run superdev";
