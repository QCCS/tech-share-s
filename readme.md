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