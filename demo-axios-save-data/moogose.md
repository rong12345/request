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
  - ##### 创建一个数据库
      ```js
        > use digicity (存在此数据库时就是进入此数据库)
      ```
      数据库是 mongodb 中的顶级存储单位，之下一级就是 **集合**
  - ##### 查看所有数据库
      ```js
        > show dbs
      ```
  - ##### 查看当前使用的数据库
      ```js
        > db 或者 db.getName()
      ```
  - ##### 删除当前使用的数据库
      ```js
        > db.dropDatabase()
      ```
  - ##### 创建一个集合
      ```js
        > db.createCollection('posts')
      ```
  - ##### 查看当前数据库的集合
      ```js
        > show collections
      ```
  - ##### 一个集合(例如：posts),里面可以插入多个数据记录
      ```js
        > db.posts.insert({title:"myTitle",content:"myContent"})
      ```
  - ##### 查看集合中的所有记录
      ```js
        > db.posts.find()
      ```
![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/001-ada.png?raw=true)
