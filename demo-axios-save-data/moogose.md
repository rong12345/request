### mongodb 启动与连接        
[知识点链接](http://haoqicat.com/react-express-api/2-mongodb)

1. #### 创建文件
    ```js
    $ mkdir -p data/db
    ```
   -p 同时创建子文件夹和父文件夹

2. #### 启动数据库

    ```js
    $ mongod --dbpath=./data/db
    ```

3. #### 操作数据库  启动 mongo shell 的形式
    ```js
    $ mongo
    ```


- 创建一个数据库
      ```js
        > use digicity (存在此数据库时就是进入此数据库)
      ```
      数据库是 mongodb 中的顶级存储单位，之下一级就是 **集合**
- 查看所有数据库
      ```js
        > show dbs
      ```
- 查看当前使用的数据库
      ```js
        > db 或者 db.getName()
      ```
- 删除数据库
      ```js
        > db.dropDatabase()  --删除当前使用的数据库
        或者
        > use digicity-express-api  --删除非当前的数据库
        > db.dropDatabase()
      ```
- 创建一个集合
      ```js
        > db.createCollection('posts')
      ```
- 查看当前数据库的集合
      ```js
        > show collections
      ```
- 一个集合(例如：posts),里面可以插入多个数据记录
      ```js
        > db.posts.insert({title:"myTitle",content:"myContent"})
      ```
- 查看集合中的所有记录
      ```js
        > db.posts.find()
      ```
- 修改一条记录（了解内容）
      ```js
        > db.posts.update({_id: ObjectId('xxx')}, {$set: {title: 'mongodb'}})
      ```
- 删除一条记录
      ```js
        > db.posts.remove({_id: ObjectId('xxx')})
      ```
- 删除 posts 集合中的所有记录
      ```js
        > db.posts.remove({})
      ```
![](https://github.com/rong12345/request/blob/master/img/001.png?raw=true)


### 为什么叫记录电子版笔记？

第一个原因，使用 markdown 格式美观

>Beauty is your ablity to tame complexity

第二个原因，便于更新

第三个原因，有 git/github 控制，永远不会丢失

第四个原因，便于搜索。
