cd src
cd db-migrate
nvm use 9.0
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
默认生成的表为大写，可以改为小写

4.表被创建，没有数据，填充数据
../../node_modules/.bin/sequelize seed:generate --name user
../../node_modules/.bin/sequelize db:seed:all
生成的默认文件没有数据，要稍微修改代码
然后就可以进行开发

5.迭代中修改表结构
那么主要就是要 了解 queryInterface 了
queryInterface封装了对表的 删除，创建，重命名，查询，修改字段，添加字段等等
再次生成模型
../../node_modules/.bin/sequelize migration:generate --name user
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


修改迁移文件之前，最好先修改对应，不然到时候插入数据报错

