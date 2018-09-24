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
create database tech-share character set utf8 collate utf8_general_ci;
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


在准真正写接口之前，先说api文档
文档也有很多中间件支持，我这边继承流行的swagger-ui
```

git checkout -b sahre8
npm install koa2-swagger-ui --save
```
