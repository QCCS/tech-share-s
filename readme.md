在github上创建一个仓库，clone到本地
创建readme.md
可以先安装nvm
然后切换安装9.0版本
因为我想用一下比较高级的语法
```
nvm list

nvm use 9.0
```

------

当前分支master
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
    "swpper"
```
生成package文件

----

创建入口文件，测试第一个node server
```
index.js
```

然后配置一下简单的es6开发环境
与前端环境一样还是需要babel，node对es6的语法并不是完成支持的

前端环境node8
安装过babel，但是这边用node9
还是需要再次安装

```
//编译工具
npm install -g babel-cli
//语法支持
npm install babel-preset-es2015 --save-dev
npm install --save-dev babel-preset-stage-0

```
配置文件中可以加入stage-0，来支持es7的语法
```
{
  "presets": ["es2015", "stage-0"],
  "plugins": []
}
```

然后就可以用es6语法开发了
但是一样就是说写一下es6，编译一下，然后跑一次
下面搞成自动化的，能写完，编译，自己重启



----

```
git checkout -b share1
```

安装
```
npm i -g supervisor
```
启动
由于 supervisor 与当前node环境一样，不能支持es6,
所以，需要运行编译之后的文件
```
supervisor dist/index.js
```
index.js改变，还需要编译
```
npm run build
```
之后，就可以自动重启

再安装一下模块打包器
不然与前端一样，import直接编译为require，找不到模块
```
npm install --save-dev webpack
方便直接输入输入 webpack 命令
npm install --save-dev webpack-cli
```
两个版本有依赖,注意查看
我们这边安装的webpack 4.x


另外我没有全局安装
运行webpack，由于环境变量里面没有webpack会找不到命令

可以这样,找当前项目目录
```
node_modules/.bin/webpack
```

注意weback配置文件添加
不然编译目标文件是浏览器运行环境的，

```
    target: 'node',
```

到这里，还差一步，就是watch整个src目录
只要有文件改变，就自动触发webpack打包
先在npm 上去找 搜索，watch file
如果找不大，自己写一个


npm 很多
 fb-watchman很强大，还可以找出改变的内容
 我们这边只需要发现改变就行
 watch
 chokidar
 用一个简单的，下载量多的 chokidar

```
npm i --save chokidar
```
然后编写一个watchChange.js
作用就是，发现src目录下改变，就重新打包，
打包之后，dist/indexjs就会变化，一旦变好，node服务自动重启

这样，我们开发过程就可以实时看见自己的api变化

supervisor运行node服务 -->
src-chanage -->
编译 -->
node server重启
-->
查看效果

-------

一个简单的node 自动化开发环境就好了
如果要链接数据库，可以安装node对应的模块
下一个分支，简单用原生node开发几个简单的api
```
git checkout -b share2
```
两个简单get请求
1.test/json
2.test/index.html

这两个都对接口简单响应，没有操作数据库
下面写一个接口，从数据库查询数据
3.test/db

连接数据库是一个复杂的过程，直接先安装数据库连接模块
```
npm i --save mysql
```
mysql 模块有额为的依赖
打包配置文件需要加上，不要外部依赖加入进来
不然import mysql 的时候把mysql模块导入进来，到时候运行就报错了；
还是保留在node_modules依赖中，运行时自动找

externals支持好几张模块加载方式，比如全局加载，与commonjs规范，
具体可以查询文档
我们这里用commonjs，commonjs系统规范就是node模块系统规范
还有CMD,AMD,虽然这些都是民间定义的，但是已经运用广，在es模块系统推广中
还会使用一段时间，这里不多讨论；

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
然后这边只是演示一个简单api，简单连接方式
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

-------
前面开发东西实在麻烦
之后开始用框架koa2

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
安装之后稍微改造index.js，更加简洁
```
import Koa from 'koa';
const app = new Koa();
// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(8080);
```
输入地址：网页显示Hello Koa
服务测试ok
koa依赖于中间件编程

----

安装路由中间价koa-router
```
npm i --save koa-router@7.4.0
```
安装路由之后，我把路由单独放一个模块里面
做一个接口
api/koa-test
输出
koa-router api

--------

开发的时候，然后每一个请求，我想看见服务器这边收到的请求输出。
再次添加开发中间件logger,这个版本倒不是那么重要

```
git checkout -b share4
npm i --save-dev koa-logger
```
app.use(logger());
这样就可以看见请求与相应了


到这个分支，插入一个点，debug
debug的话，这边不单独展开讲，
可以把webpack开启调试模式，然后配置编辑器调试


-----

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
使用之前还是需要到官网或npmjs看看使用方式
支持各种模板引擎（需要安装）
比如必须在路由配置前配置目标路径
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
-----

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

写一个模板文件ejs结尾，不然模板引擎不认识
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

----

也可以让后缀名设置 html
html 结尾使用 ejs 模板引擎
app.use(views(process.cwd() + '/dist/views', {
    map: {
      html: 'ejs'
    }
}))

有了模板引擎，可以向前端一样写页面
把变量放在js里面，渲染到页面中

ssr,同构应用大家了解一下

----

下面为了讲后续内容，也方便大家理解
设计几个表来讲
基于用户角色的权限控制，简称rbac role base access control

###三个基本表
用户表
角色表
权限表

###两个关系表
用户角色表
角色权限表
```
git checkout -b share7
```

sql不熟练可以使用软件
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
mysql版本5.7
记得加逗号，分号
表名小写，下划线，单数

---

在准真正写接口之前，先说api文档
文档也有很多中间件支持，我这边继承流行的swagger-ui
```

git checkout -b sahre8
npm install koa2-swagger-ui --save
```

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
更多写法看文档
我在static写一个doc.json
参考里面写接口，定义标签，定义模型等

当然也可以不使用中间件，自己团队约定比较规范的写法
然后自己写一个扫描器，自动扫描接口文件，生成json文件,然后生成前端可视化文档

-----

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
```
insert into table_name (field_name) values (field_value);
eg:
insert into user (name,password,mobile,id)
 values 
('json','mac123','15921552946',1);

```
方便测试把登录接口写成get方式，然后加路由后面，真实开发可以用post，md5加密
后续会讲jwt授权登录

这一节内容稍微多一点，各个文件夹，统一配置文件，数据库连接，sql，mvc等

下一个分支集成orm框架
```
git checkout -b share10
```
还是可以到npm搜索
然后查看
sequelize蛮流行

npm i sequelize --save
npm i sequelize-cli -dev


多创建三个目录(如果不喜欢用orm的可以不用着几个文件夹)
models                       # 数据库 model
migrations                   # 数据迁移的目录
seeders                      # 数据填充的目录

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
sequelize连接数据库
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
Please install mysql2 package manually
npm i --save mysql2

然后运行findone，没有数据，找不到
添加一个数据
先写service，然后controller，然后路由
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
注意建表的时候设置utf8，不然中文插入数据有问题
添加一个sql文件

---

生产环境与开发环境配置
```
git checkout -b share11
```
多添加config.prod.js,config/index
然后修改util

----

专门讲
```
sequelize-cli
git checkout -b share12
node_modules/.bin/sequelize init
```
根据文档来
单独创建一个目录来演示，开发中可以选用
cd src
mkdir db-migrate
cd db-migrate

1.初始化四个目录
```
../../node_modules/.bin/sequelize init
修改一下配置文件，创建数据库
../../node_modules/.bin/sequelize db:create
如果是生产环境
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
4.表被创建，没有数据，填充数据
```
../../node_modules/.bin/sequelize seed:generate --name demo-user
../../node_modules/.bin/sequelize db:seed:all
```
开发者不一定需要用这个，必须按照官方规定格式

----

下面讲jwt授权
接口需要token验证
```
git checkout -b share13
//身份验证
npm install koa-jwt --save
//签发token；jwt的规范实现
npm install jsonwebtoken --save
```
模块功能可以查看npm介绍或者官网介绍

然后在入口文件中配置
然后在登录接口签发token
token策略根据应用来定，是否有失效，具体失效时间，是否有refresh_token

然后做登录之后的查询
如果不带token到header上，就会返回401 Authentication Error

把token带上，可以用命令行工具测试
```
curl -X GET -H 'authorization: Bearer ***token' http://localhost:8113/api/user
```

----
有了token认证，然后把其他几个实体创建一下，
开发几个restful风格接口
```
git checkout -b share14
```
开发接口的时候看是喜欢写sql还是直接用orm库
我这边用sql,与orm库分布演示两个实体的curd

1.费用的curd--sql
2.权限的curd--orm

###针对费用 fee
1.封装dao层
2.封装service
3.因为简单且是演示（真实项目，可以考虑走controller），
直接添加到路由，不走控制器

请求接口的时候，token校验失败提示不友好，
并且顺便把token中带有的用户信息可以解密出来
可以写一个中间件处理一下
error.js
import error from './middleware/error';

###针对权限
1.定义模型
2.封装service
3.因为简单且是演示（真实项目，可以考虑走controller），
直接添加到路由，不走控制器
//todo
添加备注

有一些接口设计与定义
另外切一个分支来完成接口开发与测试
```
git checkout -b share15
```
把接口完善之后，把数据库与表创建一下 tech_share_dev
导出sql
然后先用postman 接口测试

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


---
pm2 部署
```
git checkout -b share15
```
我这边手动部署一下
0.修改端口，打包代码
1.clone代码
2.创建数据库 source
3.启动