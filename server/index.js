var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//开放CORS 关闭同源策略
var cors = require('cors');
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/request');

var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

// app.get('/posts', function(req, res) {
//   // res.redirect('http://www.baidu.com')
//   var page = "<form method='post' action='/posts'>"+
//               "<input type='text' name='title'/>"+
//                 "<input type='submit' />"+
//                 "</form>"
//   res.send(page)
// })


app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts})
  });
})
app.get('/post/:id', function(req, res) {
  Post.findOne({_id:req.params.id},function(err,doc) {
    if (err) return res.send('出错了');
    res.json({post: doc})
  })
})

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




app.post('/posts', function(req, res) {
  // var post = new Post({title: req.body.title});
  console.log(req.body);
  var post = new Post({
    title:req.body.title,
    category:req.body.category,
    content:req.body.content,
  });
  post.save(function(err){
    if(err) return console.log(err);
    console.log('save');
  })
  // res.redirect('/posts')
  res.json({message:"成功保存"})
})
app.listen(3000, function() {
  console.log('running on port 3000')
})
