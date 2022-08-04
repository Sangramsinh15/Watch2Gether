const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the existingPostSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const existingPostSchema = new mongoose.Schema({
  creation_date: { type: String },
  movie_show_id: { type: String },
  post_id: { type: String },
  watchgroup_id: { type: String },
  userid: { type: String },
  poster_url: { type: String },
  email: { type: String },
  post_descr: { type: String },
  post_comments: [
    {
      commentid: String,
      parentcommentid: String,
      postid: String,
      comment_text: String,
      user: {
        firstName: String,
        lastName: String,
        email: String,
      },
    },
  ],
  total_points: { type: Number },
  post_title: { type: String },
});

const ExistingPost = mongoose.model(
  "ExistingPost",
  existingPostSchema,
  "existingPost"
);
/**
 * The module is being exported as 'ExistingPost'
 * so that this module can be imported into other modules.
 */
module.exports = ExistingPost;
