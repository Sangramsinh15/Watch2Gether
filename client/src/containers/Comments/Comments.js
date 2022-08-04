import { useState, useEffect, useContext } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import AuthContext from "../../context/AuthContext";
import {
  GetComments as getCommentsApi,
  CreateComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./api";

/**
 * The function to create comments passed from the comment form.
 * @param {]} param0 
 * @returns The function returns comments after filtering accoring to parent and child
 */
const Comments = ({ commentsUrl, currentUserId }) => {
  const {user} = useContext(AuthContext);

  const [commentsFromBack, setCommentsFromBack] = useState([]);
  const [commentCurrent, setCommentCurrent] = useState(null);
  const commentParent = commentsFromBack.filter(
    (backendComment) => backendComment.parentId === null
  );
  console.log("Inside comments", user);
  const getReplies = (commentId) =>
    commentsFromBack
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId, user).then((comment) => {
      setCommentsFromBack([comment, ...commentsFromBack]);
      setCommentCurrent(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = commentsFromBack.map((backendComment) => {
        switch (backendComment.id) {
        case commentId:
          return { ...backendComment, body: text };
        default:console.log("Comment");
        }

        return backendComment;
      });
      setCommentsFromBack(updatedBackendComments);
      setCommentCurrent(null);
    });
  };
  const deleteComment = (commentId) => {
    if (!window.confirm("Wanna remove comment?")) return;
    deleteCommentApi().then(() => {
      const updatedBackendComments = commentsFromBack.filter(
        (backendComment) => backendComment.id !== commentId
      );
      setCommentsFromBack(updatedBackendComments);
    });
  };

  useEffect(() => {
    switch (commentsFromBack.length) {
    case 0:
      getCommentsApi().then((data) => {
        setCommentsFromBack(data);
      });
      break;
    default:console.log("Comment");
    }
  }, [commentsFromBack.length]);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Add a comment</div>
      <CommentForm submitLabel="Comment" handleSubmit={addComment} />
      <div className="comments-container">
        {commentParent.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={commentCurrent}
            setActiveComment={setCommentCurrent}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};
/**
 * The container is being exported as Comments 
 * so that this container can be imported into other modules.
 */
export default Comments;
