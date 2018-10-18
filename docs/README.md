# 从0到1搭建后端脚手架

环境依赖 Node v9.0.0

关键字：Node,ES6,koa2,mysql,sequlize,orm,jwt,swagger

此文档只是对搭建脚手架关键步骤进行说明，
详细步骤的代码，可以 clone 本项目，从不同的分支依次看。
从 master 到 share1 ---- share18 共19个分支，依次添加代码的。
之后为演示功能，share19---share22 为博客系统设计与开发。
建议是把代码 clone 到本地，根据此文档，依次安装各模块，运行代码，查看分支代码。
如有错误，可以联系我 wechat: qianchaochushui ，或者自行纠正。
代码地址：
```
https://github.com/QCCS/tech-share-s.git
```

# 环境切换
```
nvm list
nvm use 9.0
```

# 初始化项目
当前分支 master
然后
```
npm init
```
关键字可以输入：
```
"node",
"koa2",
"mysql",
"orm",
"jwt",
"restful",
"pm2",
"nginx",
"swagger"
```
生成package文件

创建入口文件，测试第一个 node server
```
index.js
```
# ES6 环境配置
然后配置一下简单的 ES6 开发环境，
与前端环境一样还是需要 babel，node 对 ES6 的语法并不是完成支持的。

前端环境 node8，
安装过 babel，但是这边用 node9，
还是需要再次安装。

```
//编译工具
npm install -g babel-cli
//语法支持
npm install babel-preset-es2015 --save-dev
npm install --save-dev babel-preset-stage-0

```
配置文件中可以加入 stage-0，来支持 ES6 的语法:
```
{
  "presets": ["es2015", "stage-0"],
  "plugins": []
}
```

然后就可以用 ES6 语法开发了,
但是一样就是说写一下 ES6 ，编译一下，然后跑一次，
下面搞成自动化的，能写完，编译，自己重启。
# 后端自动化
## supervisor
```
git checkout -b share1
```
安装 supervisor
```
npm i -g supervisor
```
由于 supervisor 与当前node环境一样，不能支持 ES6,
所以，需要运行编译之后的文件。
```
supervisor dist/index.js
```
index.js 改变，还需要编译，命令：
```
npm run build
```
运行之后，就可以自动重启。
## webpack
再安装一下模块打包器
不然与前端一样，import 直接编译为 require，找不到模块
```
npm install --save-dev webpack
//方便直接输入 webpack 命令
npm install --save-dev webpack-cli
```
两个版本有依赖,注意查看,
我们这边安装的webpack 4.x;


另外我没有全局安装，
运行webpack，由于环境变量里面没有webpack会找不到命令,

可以这样,找当前项目目录:
```
node_modules/.bin/webpack
```

注意weback配置文件添加,
不然编译目标文件是浏览器运行环境的，

```
    target: 'node',
```
## chokidar

到这里，还差一步，就是 watch 整个 src 目录,
只要有文件改变，就自动触发 webpack 打包,
先在npm 上去找 搜索，"watch file",
如果找不大，自己写一个,

npm网站上很多：
 fb-watchman：很强大，还可以找出改变的内容；
 我们这边只需要发现改变就行，
 watch，
 chokidar，
 用一个简单的，下载量多的 chokidar：

```
npm i --save chokidar
```
然后编写一个 watchChange.js
作用就是，发现 src 目录下改变，就重新打包，
打包之后，dist/indexjs 就会变化，一旦变好，node 服务自动重启，

这样，我们开发过程就可以实时看见自己的 api 变化。
自动流程这样：
supervisor 运行 node 服务 -->
 src - chanage -->
编译 -->
node server重启
-->
查看效果。
到这里，一个简单的 node 自动化开发环境就好了。
# 连接数据库
如果要连接数据库，可以安装 node 对应的模块
下一个分支，简单用原生 node 开发几个简单的 api
```
git checkout -b share2
```
两个简单get请求
## 接口1-json
1.test/json
## 接口2-html
2.test/index.html

这两个都对接口简单响应，没有操作数据库，
下面写一个接口，从数据库查询数据，
## 接口3-db
3.test/db

连接数据库是一个复杂的过程，直接先安装数据库连接模块.
```
npm i --save mysql
```
mysql 模块有额为的依赖
打包配置文件需要加上，不要外部依赖加入进来
不然 import mysql 的时候把 mysql 模块导入进来，到时候运行就报错了；
还是保留在 node_modules 依赖中，运行时自动找.

externals 支持好几张模块加载方式，比如全局加载，与 commonjs 规范，
具体可以查询文档,
我们这里用 commonjs，commonjs 系统规范就是 node 模块系统规范,
还有CMD,AMD,虽然这些都是民间定义的，但是已经运用广，在 ES 模块系统推广中
还会使用一段时间，这里不多讨论；
修改webpack:
```
externals:_externals();
... ...
//外部依赖
function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}

```
然后这边只是演示一个简单 api，简单连接方式
```
let db = mysql.createConnection({host: '127.0.0.1', user: 'root', password: 'mac123', database: 'information_schema'});
    db.query("SELECT * FROM `USER_PRIVILEGES`;", (err, data)=>{
        if(err){
            console.log('err', err);
        } else {
            res.write(JSON.stringify(data));
            res.end();
        }
    });
```
后面我们借助orm框架，演示一下比较规范，复杂的东西

以上原生 node 开发东西实在麻烦，
之后开始用框架koa2

# Koa2
## koa2
```
git checkout -b share3
```
开发时不编译打包，最后发布的时候一次性打包。

1.由于调试问题。我需要用编辑器打断点，打包好之后，我不方便。

2.后端打包相比前端打包需求不是那么明显。前端打包主要一个原因
就是压缩代码，混淆代码。减少网络传输时间，不要别人看源码。
而服务端不存在。

```
//安装版本不要直接就安装，最好是到官网，npm看看版本
//我这边看最新版本2.5.3，但是我习惯安装前一个稳定版本
npm i --save koa@2.5.2
```
安装之后稍微改造 index.js，更加简洁
```
import Koa from 'koa';
const app = new Koa();
// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(8080);
```
输入地址：网页显示 Hello Koa,
服务测试ok,
Koa依赖于中间件编程。

## koa-router
安装路由中间价koa-router
```
npm i --save koa-router@7.4.0
```
安装路由之后，我把路由单独放一个模块里面。
做一个接口：
api/koa-test
输出：
koa-router api

## koa-logger
开发的时候，然后每一个请求，我想看见服务器这边收到的请求输出。
再次添加开发中间件 logger,这个版本倒不是那么重要。

```
git checkout -b share4
npm i --save-dev koa-logger
```
app.use(logger());
这样就可以看见请求与相应了。

## 后端debug
到这个分支，插入一个点，debug。
debug 的话，这边不单独展开讲，
可以把 webpack 开启调试模式，然后配置编辑器调试。


## koa-static

静态资源服务与模板引擎
```
git checkout -b share5
npm install --save koa-static
```
打包拷贝静态文件夹
```

npm install copy-webpack-plugin --save-dev

new copyWebpackPlugin([{
    from:__dirname+'/src/public',//打包的静态资源目录地址
    to:'./static' //打包到dist下面的 static
}]),
```
模板引擎
```
git checkout -b share6
npm install --save koa-views
```
使用之前还是需要到官网或npmjs看看使用方式，
支持各种模板引擎（需要安装），
比如必须在路由配置前配置目标路径，
... ...

安装之后，简单使用

1.创建views文件夹
2.配置webpack，模板文件也是静态文件
3.修改入口文件
```
// Must be used before any router is used
//默认支持静态文件输出
app.use(views(process.cwd() + '/dist/views'));
```
4.添加测试路由
```
router
    .get('/koa-view', async (ctx) => {
        //注意异步函数
        await ctx.render('index', {
            user: 'John'
        });
    });
```
## ejs
安装一个模板引擎
```
npm i --save ejs
```
添加配置
```
app.use(views(process.cwd() + '/dist/views', {
  extension: 'ejs'
}))
//路由
.get('/koa-ejs', async (ctx) => {
        await ctx.render('home', {
            title: 'home page',
            user: 'John',
        });
    });
```   

写一个模板文件 ejs 结尾，不然模板引擎不认识
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title><%= title %></title>
    </head>
    <body>
    ejs file
    <%= user %>
    </body>
    </html>
```
输出，两个变量

也可以让后缀名设置 html
html 结尾使用 ejs 模板引擎
```
app.use(views(process.cwd() + '/dist/views', {
    map: {
      html: 'ejs'
    }
}))
```

有了模板引擎，可以向前端一样写页面，
把变量放在js里面，渲染到页面中。

ssr,同构应用大家了解一下。

## 表设计
下面为了讲后续内容，也方便大家理解，
设计几个表来讲，
基于用户角色的权限控制，简称rbac role base access control：

用户表，
角色表，
权限表

用户角色表，
角色权限表
```
git checkout -b share7
```

sql 不熟练可以使用软件。
```
//登录数据库
mysql -u root -p

//创建一个数据库
create database tech_share character set utf8 collate utf8_general_ci;
use database;

//创建五个表
user

create table user (
id int(11) primary key unique not null,
name varchar(20) not null,
password varchar(20) not null,
mobile varchar(50) not null
);

create table role (
id int(11) primary key unique not null,
name varchar(20) not null
);

create table permission (
id int(11) primary key unique not null,
name varchar(20) not null
);

create table user_role (
id int(11) primary key unique not null,
user_id int(11) not null default 0,
role_id int(11) not null default 0
);

create table role_permission (
id int(11) primary key unique not null,
role_id int(11) not null default 0,
permission_id int(11) not null default 0
);


```
mysql版本5.7。
记得加逗号，分号，
表名小写，下划线，单数。

## swagger-ui

在准真正写接口之前，先说 api 文档，
文档也有很多中间件支持，我这边继承流行的 swagger-ui：
安装
```
git checkout -b sahre8
npm install koa2-swagger-ui --save
```
使用
```
const koaSwagger = require('koa2-swagger-ui');
app.use(
    koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            url: 'http://petstore.swagger.io/v2/swagger.json', // example path to json
        },
    }),
);

```
更多写法看文档，
我在 static 写一个 doc.json，
参考里面写接口，定义标签，定义模型等。

当然也可以不使用中间件，自己团队约定比较规范的写法。
然后自己写一个扫描器，自动扫描接口文件，生成 json 文件,然后生成前端可视化文档。

## 整理目录
整理一下目录结构

```
git checkout -b share9
```
```
常规的目录

config 配置
route 路由

dao 数据定义
service 接口实现
controller 接口逻辑控制

middleware 中间件

util 公共函数

views 模板引擎
static 静态文件
```

1.写统一配置文件

2.然后我们在把每个响应头加上一下配置，让接口方便访问；

3.写一个统一数据库连接池与查询函数
注意异步函数写法

4.分别写user的dao，service，contoller,并添加对应接口，测试；

```
写接口注意常用的几个属性
ctx.params;路由参数 /:aa/:bb
ctx.query;查询参数 ?aa=aa
ctx.request.body;post body get没有
```
5.数据库插入数据方便测试
插入语句
```
insert into table_name (field_name) values (field_value);
```
插入数据
```
insert into user (name,password,mobile,id)
 values 
('json','mac123','15921552946',1);

```
方便测试把登录接口写成 get 方式，然后加路由后面，真实开发可以用post，md5加密，
后续会讲 jwt 授权登录。

这一节内容稍微多一点，各个文件夹，统一配置文件，数据库连接，sql，mvc 等。
# Sequelize

下一个分支集成 orm 框架
```
git checkout -b share10
```
还是可以到npm搜索，
然后查看。
sequelize 蛮流行：
```
npm i sequelize --save
npm i sequelize-cli -dev
```

多创建三个目录(如果不喜欢用orm的可以不用着几个文件夹)
```
models                       # 数据库 model

migrations                   # 数据迁移的目录

seeders                      # 数据填充的目录
```
写模型
```
role
user
user-role
```
```
eg
var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model 对应的表名将与model名相同
});
```

写控制器
```
   let res = role.findOne();
```
配置路由
```
    .get('/role', roleController);
```
sequelize 连接数据库
```
var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
```

然后运行提示安装mysql2
```
Please install mysql2 package manually
```
安装mysql2
```
npm i --save mysql2
```

然后运行 findone，没有数据，找不到
添加一个数据
先写 service，然后 controller，然后路由
```
import role from '../../models/role';
async function createService(id,name) {
    let res = await role.create({
        id: id,
        name: name
    });
    return res;
}
export default createService;
```
注意建表的时候设置 utf8，不然中文插入数据有问题
添加一个 sql 文件

# 配置文件
生产环境与开发环境配置
```
git checkout -b share11
```
多添加 config.prod.js, config/index，
然后修改 util

# sequelize-cli
专门讲
sequelize-cli这节可以直接查看 后续-博客系统，更加详细
```
sequelize-cli
git checkout -b share12
node_modules/.bin/sequelize init
```
根据文档来，
单独创建一个目录来演示，开发中可以选用。
```
cd src
cd db-migrate
nvm use 9.0
```
1.初始化四个目录
```
../../node_modules/.bin/sequelize init
```
修改一下配置文件，创建数据库
```
../../node_modules/.bin/sequelize db:create
```
如果是生产环境
```
NODE_ENV=production ../../node_modules/.bin/sequelize db:create
```
2.创建一个模型
```
../../node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```
可以稍微修改,模型

3.根据模型创建表
```
../../node_modules/.bin/sequelize db:migrate
```
默认生成的表为大写，可以改为小写

4.表被创建，没有数据，填充数据
```
../../node_modules/.bin/sequelize seed:generate --name user
../../node_modules/.bin/sequelize db:seed:all
```
生成的默认文件没有数据，要稍微修改代码
然后就可以进行开发

5.迭代中修改表结构
那么主要就是要 了解 queryInterface 了
queryInterface封装了对表的 删除，创建，重命名，查询，修改字段，添加字段等等
再次生成模型
```
../../node_modules/.bin/sequelize migration:generate --name user
```
然后修改 migation 中的代码

添加字段 firstName3
```
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
     数据库已经存在表 User1
     添加字段 firstName3
    */
    return queryInterface.addColumn(
        'User1',
        'firstName3',
        Sequelize.STRING
    )

  },

  down: (queryInterface, Sequelize) => {
    /*
        数据库已经存在表 User1
        上面添加字段 firstName3
        运行 undo 的时候，删除字段
       */
      return queryInterface.removeColumn('User1', 'firstName3');
  }
};

```
文件修改好之后,运行命令：
```
//添加字段
../../node_modules/.bin/sequelize db:migrate
//删除字段
../../node_modules/.bin/sequelize db:migrate:undo
```


修改迁移文件之前，最好先修改对应，不然到时候插入数据报错，


开发者不一定需要用这个，必须按照官方规定格式。

# jwt
下面讲jwt授权
接口需要token验证
```
git checkout -b share13
//身份验证
npm install koa-jwt --save
//签发token；jwt的规范实现
npm install jsonwebtoken --save
```
模块功能可以查看npm介绍或者官网介绍。

然后在入口文件中配置，
然后在登录接口签发 token
token 策略根据应用来定，是否有失效，具体失效时间，是否有 refresh_token

然后做登录之后的查询，
如果不带token到header上，就会返回401 Authentication Error。

把token带上，可以用命令行工具测试：
```
curl -X GET -H 'authorization: Bearer ***token' http://localhost:8113/api/user
```
# restful-api
有了 token 认证，然后把其他几个实体创建一下，
开发几个 restful 风格接口：
```
git checkout -b share14
```
开发接口的时候看是喜欢写sql还是直接用orm库,
我这边用sql,与orm库分布演示两个实体的curd

1.费用的curd--sql
2.权限的curd--orm

## 针对费用 fee
1.封装dao层

2.封装service

3.因为简单且是演示（真实项目，可以考虑走controller），

直接添加到路由，不走控制器

请求接口的时候，token校验失败提示不友好，
并且顺便把token中带有的用户信息可以解密出来
可以写一个中间件处理一下
error.js
import error from './middleware/error';

## 针对权限
1.定义模型

2.封装service

3.因为简单且是演示（真实项目，可以考虑走controller），
直接添加到路由，不走控制器

//todo
添加备注
## 接口测试
有一些接口设计与定义
另外切一个分支来完成接口开发与测试
```
git checkout -b share15
```
把接口完善之后，把数据库与表创建一下 tech_share_dev
导出sql
然后先用postman 接口测试
## koa-bodyparser
```
//请求体处理，方便获取查询参数
npm i --save koa-bodyparser
```
接口测试通过

```
get
http://localhost:8113/api/login?mobile=15921552946&password=mac123
http://localhost:8113
get
http://localhost:8113/api/koa-test
get
http://localhost:8113/api/koa-ejs
post
http://localhost:8113/api/fee
{
    "des":"第一个份额与",
    "title":"test fee1",
    "total":"12",
    "password":"mac1234"
}

get 单个
http://localhost:8113/api/fee/11

put
http://localhost:8113/api/fee
{
    "des":"第一个份额与",
    "title":"test 1111fee1",
    "total":"12",
    "id":12,
    "password":"mac1234"
}

get 列表
http://localhost:8113/api/feelist

get 搜索
http://localhost:8113/api/fee?title=1111fee1&des=1

permission

post
http://localhost:8113/api/permission
{
    "name":"经理",
    "id":1
}

delete
http://localhost:8113/api/permission/1

put
http://localhost:8113/api/permission
{
    "name":"经理111",
    "id":1
}

get 查询某一个
http://localhost:8113/api/permission/2

get 查询所有
http://localhost:8113/api/permission


文档 doc
http://localhost:8113/doc.json
```

# pm2 部署
pm2 部署
```
git checkout -b share15
```
我这边手动部署一下，
服务器先要安装 mysql，pm2,
## 部署步骤
0.修改端口，打包代码
```
1.clone代码
git clone https://github.com/QCCS/tech-share-s.git
cd tech-share-s
git checkout -b share16
git pull origin share16
```

2.创建数据库 source
```
cd src
source tech_share_prod.sql;
```

3.启动
```
cd ..
npm i --no-package-lock
修改配置文件
npm run webpackProd
pm2 start dist/index.js -i 0 --name "tech-share-s"
```

4.访问
```
http://47.100.13.168:9113/swagger
```


## nginx配置
```
git checkout -b share17
```
代理
http://47.100.13.168:9113/
nginx配置
```
server {
   listen 80;
   server_name share.json119.com;

   location / {
       proxy_set_header   X-Real-IP $remote_addr;
       proxy_set_header   Host      $http_host;
       proxy_pass         http://127.0.0.1:9113;
   }
}
```

之后访问
```
http://share.json119.com/api/login?mobile=15921552946&password=mac123
```
# koa2-file-upload
添加上传文件中间件
```
git checkout -b share18
```
安装
```
npm i koa2-file-upload
```
使用
```
let options = {
    "url": '/api/upload',
    "provider": "local",//存储位置类型
    // "mimetypes": ['image/png','image/bmp'],
    // 如果没有配置,将不进行类型检查 http://www.freeformatter.com/mime-types-list.html
    "folder": "publicImg/images",//上传文件夹,后面 images 与 urlPath images 保持一致，这样可以直接把返回的 url 保持，
    "storeDir": 'img',//存储文件夹
    "urlPath": "images"//获取的时候url，可以存储，设置上传文件夹为静态路由，之后直接访问
}
app.use(uploader(options))

```
测试
```
post api/upload
headers
enctype=multipart/form-data
body
{
file:""
}
```
上传成功后会返回一个地址
```
/images/img/2018/09/29/e95952c8-843f-42be-bc3e-ce0b5f56cca8.png
```
//上传的图片的存储目录，设置为静态目录，可以直接查看文件
```
//设置静态目录
let staticImgPath = process.cwd()+"/publicImg";
app.use(staticServer(staticImgPath));
//查看
http://localhost:9113/images/img/2018/09/29/e95952c8-843f-42be-bc3e-ce0b5f56cca8.png

```

# 后续-博客系统
添加几个表，成为博客系统
```
git checkout -b share19
```

sequelize 会需要几个文件夹，并且文件夹在运行目录的跟目录,
所以，
```
cd src
../node_modules/.bin/sequelize init
```

这样就会自动生成

```
config/config.json
models
migrations
```

然后创建 migration 文件
运行命令
```
../node_modules/.bin/sequelize migration:generate --name model_name
```
## 设置实体模型 model
比如创建 image 表，先创建 model image
然后运行命令
```
../node_modules/.bin/sequelize migration:generate --name image
```
在 migrations 目录下，生成 image 的迁移文件

在迁移文件中根据model中定义的字段，添加逻辑
运行
```
../node_modules/.bin/sequelize db:migrate
```
即可生成对应的表
## 创建迁移文件 migration

如果修改模型-再次生成 migration
```
../node_modules/.bin/sequelize migration:generate --name image
../node_modules/.bin/sequelize db:migrate
```
或者直接修改迁移文件
```
../node_modules/.bin/sequelize db:migrate:undo
../node_modules/.bin/sequelize db:migrate
```
## 创建表
创建以下表：tables
```
image
comment
tag
post
post_tag
post_comment
post_like
post_read
```
依次运行，生成迁移文件
```
../node_modules/.bin/sequelize migration:generate --name image
../node_modules/.bin/sequelize migration:generate --name comment
../node_modules/.bin/sequelize migration:generate --name tag
../node_modules/.bin/sequelize migration:generate --name post
... ...

```

修改对应迁移文件

修改完成之后
```
../node_modules/.bin/sequelize db:migrate
```
可以查看数据库
就生成了表
```

mysql> show tables;
+--------------------------+
| Tables_in_tech_share_dev |
+--------------------------+
| SequelizeMeta            |
| comment                  |
| fee                      |
| image                    |
| permission               |
| post                     |
| post_comment             |
| post_like                |
| post_read                |
| post_tag                 |
| role                     |
| role_permission          |
| tag                      |
| user                     |
| user_role                |
+--------------------------+
15 rows in set (0.00 sec)

mysql> desc comment;
+-----------+----------+------+-----+---------+----------------+
| Field     | Type     | Null | Key | Default | Extra          |
+-----------+----------+------+-----+---------+----------------+
| id        | int(11)  | NO   | PRI | NULL    | auto_increment |
| user_id   | int(11)  | NO   |     | NULL    |                |
| comment   | text     | NO   |     | NULL    |                |
| createdAt | datetime | NO   |     | NULL    |                |
| updatedAt | datetime | NO   |     | NULL    |                |
+-----------+----------+------+-----+---------+----------------+
5 rows in set (0.00 sec)

mysql> desc image;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| user_id   | int(11)      | NO   |     | NULL    |                |
| path      | varchar(255) | NO   |     | NULL    |                |
| name      | varchar(255) | YES  |     | NULL    |                |
| size      | bigint(20)   | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
7 rows in set (0.00 sec)

mysql> desc post;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| user_id   | int(11)      | NO   |     | NULL    |                |
| title     | varchar(255) | NO   |     | NULL    |                |
| desc      | varchar(255) | NO   |     | NULL    |                |
| content   | text         | NO   |     | NULL    |                |
| is_delete | tinyint(4)   | NO   |     | NULL    |                |
| is_draft  | tinyint(4)   | NO   |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
9 rows in set (0.01 sec)

mysql> desc tag;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| user_id   | int(11)      | NO   |     | NULL    |                |
| tag       | varchar(255) | NO   |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
mysql> desc post_comment;
+------------+----------+------+-----+---------+----------------+
| Field      | Type     | Null | Key | Default | Extra          |
+------------+----------+------+-----+---------+----------------+
| id         | int(11)  | NO   | PRI | NULL    | auto_increment |
| post_id    | int(11)  | NO   |     | NULL    |                |
| comment_id | int(11)  | NO   |     | NULL    |                |
| createdAt  | datetime | NO   |     | NULL    |                |
| updatedAt  | datetime | NO   |     | NULL    |                |
+------------+----------+------+-----+---------+----------------+
5 rows in set (0.01 sec)

mysql> desc post_like;
+-----------+----------+------+-----+---------+----------------+
| Field     | Type     | Null | Key | Default | Extra          |
+-----------+----------+------+-----+---------+----------------+
| id        | int(11)  | NO   | PRI | NULL    | auto_increment |
| post_id   | int(11)  | NO   |     | NULL    |                |
| user_id   | int(11)  | NO   |     | NULL    |                |
| createdAt | datetime | NO   |     | NULL    |                |
| updatedAt | datetime | NO   |     | NULL    |                |
+-----------+----------+------+-----+---------+----------------+
5 rows in set (0.01 sec)

mysql> desc post_read;
+-----------+----------+------+-----+---------+----------------+
| Field     | Type     | Null | Key | Default | Extra          |
+-----------+----------+------+-----+---------+----------------+
| id        | int(11)  | NO   | PRI | NULL    | auto_increment |
| post_id   | int(11)  | NO   |     | NULL    |                |
| user_id   | int(11)  | NO   |     | NULL    |                |
| createdAt | datetime | NO   |     | NULL    |                |
| updatedAt | datetime | NO   |     | NULL    |                |
+-----------+----------+------+-----+---------+----------------+
5 rows in set (0.01 sec)

mysql> desc post_like;
+-----------+----------+------+-----+---------+----------------+
| Field     | Type     | Null | Key | Default | Extra          |
+-----------+----------+------+-----+---------+----------------+
| id        | int(11)  | NO   | PRI | NULL    | auto_increment |
| post_id   | int(11)  | NO   |     | NULL    |                |
| user_id   | int(11)  | NO   |     | NULL    |                |
| createdAt | datetime | NO   |     | NULL    |                |
| updatedAt | datetime | NO   |     | NULL    |                |
+-----------+----------+------+-----+---------+----------------+
5 rows in set (0.01 sec)

```
## 创建实体 service
下一步可以在 service 目录下创建
几个表实体对应查询的 service
对这几个表的 curd
```
git checkout -b share20

cd src/service
mkdir image comment post tag postTag postComment postLike postRead
```
依次创建 service 文件

## 创建实体 controller
依次创建 controller 文件
```
image comment post tag postTag postComment postLike postRead
```
然后把博客系统模板分离出来，单独成为一个模块
创建路由文件
postModuleRouter.js
在入口文件引入
```
import postModuleRouter from './route/postModuleRouter';
app.use(postModuleRouter.router.routes());
```
## 定义接口
分别定义博客系统各实体的路由
```
router
    .post('/comment', commentController.createComment)
    .delete('/comment/:id', commentController.deleteComment)
    .put('/comment', commentController.updateComment)
    .get('/comment/:id', commentController.getComment)
    .get('/comment', commentController.getAllComment)
```
注意：模型与迁移文件是下划线命名，service 与 controller 是驼峰命名
## 测试接口
测试 api
```
comment
curd ok

image
curd ok

post
curd ok

tag
curd ok

post_comment
post_tag
post_like
post_read
curd ok
```

通过 博客id 查询该博客评论

博客系统完成

用户注册，登陆

博客评论

博客标签

博客点赞

博客阅读量
## 事务
添加事务
创建评论，关联博客
创建标签，关联博客
```
async function createTag(user_id, tag_name, post_id) {
    let res = null;
    let pt = null;
    // 创建事务
    // 情况1：只创建标签
    // 情况2：在博客上添加标签
    return db.sequelize.transaction(async function (t) {
        // 在事务中执行操作
        res = await tag.create(
            {
                user_id: user_id,
                tag: tag_name
            },
            {transaction: t}
        );
        if (post_id) {
            pt = await postTag.create(
                {
                    post_id,
                    tag_id: res.id
                },
                {
                    transaction: t
                }
            );
            // 事务回滚
            // pt = await postTag.create(
            //     {},
            //     {
            //         transaction: t
            //     }
            // );
        }
        // 返回给成功的回调
        return {
            res,
            pt
        }
    }).then(function (results) {
        /* 操作成功，事务会自动提交 */
        //返回到控制器
        return results;
    }).catch(function (err) {
        /* 操作失败，事件会自动回滚 */
        return err;
    });
}

```
## 后端渲染博客前台页面
后端渲染博客前台页面

添加博客列表

添加博客详情页面

添加路由
```
.get('/blog', async (ctx) => {})
.get('/blog/:id', async (ctx) => {})
```
博客前台页面放弃认证:
```
app.use(koaJwt({secret: config.secret.sign}).unless({
    path: [
        /^\/api\/blog/,
    ]
}));
```
在 views 目录下添加 ejs 模板页面
```
blog.ejs
blog_index.ejs
```
ejs语法参考
```
http://ejs.co
```

## logs
//日志处理
```
app.use(logger((str, args) => {
    console.log(str)
    let t = new Date();
    let _t = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + t.getHours();
    let logFileName = "log" + _t + '.txt';
    fs.appendFile('logs/' + logFileName, str);
}));
```
# 添加文档
```
docs
git checkout -b share21
```
http://localhost:63342/tech-share-s/docs

# model 表关联
```
git checkout -b share22
```
修改模型
```
post.belongsToMany(tag, { as: 'tag', through: post_tag, foreignKey: 'post_id' });
tag.belongsToMany(post, { as: 'post', through: post_tag, foreignKey: 'tag_id' });
```
修改迁移文件
```
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        //添加 post_id 外键
        return queryInterface.addConstraint('post_tag', ['post_id'], {
            type: 'FOREIGN KEY',
            name: 'post_id_constraint_name',
            references: { //Required field
                table: 'post',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('post_tag', 'post_id_constraint_name');
    }
};
```
运行命令
```
cd src
../node_modules/.bin/sequelize db:migrate
```

导出数据库，可以查看已经创建了外键

```
mysqldump -uroot -pmac123 -B tech_share_dev > /Users/zhouli/Desktop/tech_share_dev_181016.sql
```
```
DROP TABLE IF EXISTS `post_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id_constraint_name` (`post_id`),
  KEY `tag_id_constraint_name` (`tag_id`),
  CONSTRAINT `post_id_constraint_name` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_id_constraint_name` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
```

## 下次继续前后端自动化测试，请等待 ):
 