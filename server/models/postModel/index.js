const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the postSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const postSchema = new mongoose.Schema({
  post_title: { type: String, required: true },
  description: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
  uploaded_image: { type: String },
  userid: { type: String },
  movie_show_id: { type: String },
  watchgroup_id: { type: String },
  postid: { type: String },
});

const Post = mongoose.model("Post", postSchema, "post");
/**
 * The module is being exported as 'Post'
 * so that this module can be imported into other modules. 
 */
module.exports = Post;
