const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the commentSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const commentSchema = new mongoose.Schema({
  comment_id: { type: String},
  comment_text: { type: String},
  post_id: {type: String},
  author_name: { type: String},  
  author_email: { type: String},
  parent_comment_id: { type: String},
  created_at: { type: String },
});

/**
 * Here, the comment schema is converted into a mongoose object.
 */
const Comment = mongoose.model("commentData", commentSchema);

/**
 * The module is being exported as Comment so that this module can be imported into other modules.
 */
module.exports = Comment;