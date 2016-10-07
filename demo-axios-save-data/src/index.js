var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

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