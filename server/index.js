var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');  //在 js 代码中导入 mongoose
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//开放CORS 关闭同源策略
var cors = require('cors'); //请求允许的源头
app.use(cors());

mongoose.Promise = global.Promise; //加上没有警告信息
mongoose.connect('mongodb://localhost:27017/request');  //进行数据库的连接

var Post = require('./models/post');

var db = mongoose.connection; //保证数据库连接是成功
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

var routes = require('./routes');
routes(app);
// app.get('/', function(req, res) {
//   res.send('this is th api aerver')
// });

// app.get('/posts', function(req, res) {
//   Post.find().exec(function(err, posts) {
//     res.json({ posts: posts})
//   });
// })
// app.get('/post/:id', function(req, res) {
//   Post.findOne({_id:req.params.id},function(err,doc) {
//     if (err) return res.send('出错了');
//     res.json({post: doc})
//   })
// })

// app.post('/posts', function(req, res) {
//   // var post = new Post({title: req.body.title});
//   console.log(req.body);
//   var post = new Post({
//     title:req.body.title,
//     category:req.body.category,
//     content:req.body.content,
//   });
//   post.save(function(err){
//     if(err) return console.log(err);
//     console.log('save');
//   })
//   // res.redirect('/posts')
//   res.json({message:"成功保存"})
// })
app.listen(3000, function() {
  console.log('running on port 3000')
})

// app.get('/posts', function(req, res) {
//   // res.redirect('http://www.baidu.com')
//   var page = "<form method='post' action='/posts'>"+
//               "<input type='text' name='title'/>"+
//                 "<input type='submit' />"+
//                 "</form>"
//   res.send(page)
// })


// app.get('/posts', function(req, res) {
//   console.log('GET /posts')
// })

//读取一篇文章
//
//
//
// app.get('/posts', function(req, res) {
//   Post.find().sort({'_id':-1}).exec(function(err,posts) {
//       res.send(posts)
//   });

// })

// app.get('/posts/:id', function(req, res) {
//   res.send('GET /posts/:id')
//   console.log('GET /posts/:id')
// })
//更新一篇文章
// app.put('/posts/:id', function(req, res) {
//   res.send('PUT /posts/:id')
//   console.log('PUT /posts/:id')
// })

//发布一篇文章
// app.post('/posts', function(req, res) {
//   res.send('The Blog title is'+req.query.title)
//   console.log('POST /posts')
// })

// app.post('/posts/', function(req, res) {
//   res.send('the post title is:'+ req.body.title)
// })

//删除一篇文章
// app.delete('/posts/:id', function(req, res) {
//   res.send('DELETE /posts')
//   console.log('DELETE /posts/:id')
// })
