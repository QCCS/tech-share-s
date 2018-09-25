1.初始化四个目录
../../node_modules/.bin/sequelize init
修改一下配置文件，创建数据库
../../node_modules/.bin/sequelize db:create
如果是生产环境
NODE_ENV=production ../../node_modules/.bin/sequelize db:create

2.创建一个模型
../../node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
可以稍微修改,模型

3.根据模型创建表
../../node_modules/.bin/sequelize db:migrate

4.表被创建，没有数据，填充数据
../../node_modules/.bin/sequelize seed:generate --name demo-user
../../node_modules/.bin/sequelize db:seed:all

5.修改表结构（占时没发现有文档介绍相关api）
https://github.com/sequelize/sequelize/issues/7702
修改之后模型，重新运行
../../node_modules/.bin/sequelize db:migrate是不行的
需要回滚到最初状态
../../node_modules/.bin/sequelize db:migrate:undo

需要扩展一下工具,让修改之后的表结构正常
../../node_modules/.bin/sequelize db:migrate:update