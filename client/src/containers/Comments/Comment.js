import CommentForm from "./CommentForm";
/**
 * The function is responsible for
 * creating the comment animations
 * @param {*} param0 
 * @returns 
 */
const Comment = ({
    comment: commentText,
    replies: commentReplies,
    setActiveComment: commentSetter,
    activeComment: currentComment,
    updateComment: editComment,
    deleteComment: removeComment,
    addComment: commentInsert,
    parentId: comment_parent_id = null,
    currentUserId,
}) => {
    const commentEdit = currentComment && currentComment.id === commentText.id && currentComment.type === "editing";
    const commentReply = currentComment && currentComment.id === commentText.id && currentComment.type === "replying";
    const timeOut = 300000;
    const execTime = new Date() - new Date(commentText.createdAt) > timeOut;
    const deleter = currentUserId === commentText.userId && commentReplies.length === 0 && !execTime;
    const replyTo = Boolean(currentUserId);
    const editOf = currentUserId === commentText.userId && !execTime;
    const idReplyTo = comment_parent_id ? comment_parent_id : commentText.id;
    const created_time = new Date(commentText.createdAt).toLocaleDateString();
    return (
        <div key={commentText.id} className="comment">
            <div className="comment-image-container">
                <img src="/user-icon.png" alt=" " />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{commentText.username}</div>
                    <div>{created_time}</div>
                </div>
                {!commentEdit && <div className="comment-text">{commentText.body}</div>}
                {commentEdit && (
                    <CommentForm
                        submitLabel="Update"
                        hasCancelButton
                        initialText={commentText.body}
                        handleSubmit={(text) => editComment(text, commentText.id)}
                        handleCancel={() => {
                            commentSetter(null);
                        }}
                    />
                )}
                <div className="comment-actions">
                    {replyTo && (
                        <div
                            className="comment-action"
                            onClick={() =>
                                commentSetter({ id: commentText.id, type: "replying" })
                            }

                        >
                            Reply
                        </div>
                    )}
                    {editOf && (
                        <div
                            className="comment-action"
                            onClick={() =>
                                commentSetter({ id: commentText.id, type: "editing" })
                            }
                        >
                            Edit
                        </div>
                    )}
                    {deleter && (
                        <div
                            className="comment-action"
                            onClick={() => removeComment(commentText.id)}
                        >
                            Delete
                        </div>
                    )}
                </div>
                {commentReply && (
                    <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text) => commentInsert(text, idReplyTo)}
                    />
                )}
                {commentReplies.length > 0 && (
                    <div className="replies">
                        {commentReplies.map((reply) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                setActiveComment={commentSetter}
                                activeComment={currentComment}
                                updateComment={editComment}
                                deleteComment={removeComment}
                                addComment={commentInsert}
                                parentId={commentText.id}
                                replies={[]}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
/**
 * The container is being exported as Comment 
 * so that this container can be imported into other modules.
 */
export default Comment;