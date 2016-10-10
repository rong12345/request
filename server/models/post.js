var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义概要
var PostSchema = new Schema(
  {
    title:String,
    category:String,
    content:String
  },
  {
      timestamps:true
  }
)
module.exports = mongoose.model('Post',PostSchema);
