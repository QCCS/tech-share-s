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

没有框架写接口，操作数据库，实在有点麻烦



----

安装koa2

```
git checkout -b share3
```