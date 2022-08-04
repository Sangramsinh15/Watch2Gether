const Comment = require("../../models/commentModel");

/**
 * insert newly added comment in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
exports.insertComment = function (req, res) {
  const createCommentData = new Comment();
  const { comment_id, comment_text, post_id, author_name, author_email, parent_comment_id, created_at } = req.body;
    (createCommentData.comment_id = comment_id),
    (createCommentData.comment_text = comment_text),
    (createCommentData.post_id = post_id),
    (createCommentData.author_name = author_name),
    (createCommentData.author_email = author_email),
    (createCommentData.parent_comment_id = parent_comment_id),
    (createCommentData.created_at = created_at);

  createCommentData.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};

/**
 * fetch the comments in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
exports.fetchComment = function (req, res) {
  console.log(req.body.post_id);
  Comment.find({post_id: req.body.post_id}, function(err, commentList) {
    if (err) return res.json({ success: false, error: err });
    res.json({ data: commentList });
  });
};

/**
 * delete the comments in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
exports.deleteComment = function (req, res) {
  const comments = { comment_id: req.body.comment_id };
  Comment.findOneAndDelete(comments, function (err, commentList) {
    if (err) return res.json({ success: false, error: err });
    res.json({ data: commentList });
  });
};

/**
 * update the comments in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
exports.updateComment = function (req, res) {
  Comment.findOneAndUpdate(
    { comment_id: req.body.comment_id },
    { comment_text: req.body.comment_text },
    function (err, commentList) {
      if (err) return res.json({ success: false, error: err });
      res.json({ data: commentList });
    }
  );
};
