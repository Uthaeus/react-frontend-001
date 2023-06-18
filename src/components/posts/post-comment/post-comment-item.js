

function PostCommentItem({ comment }) {
    console.log('comment:', comment)
    return (
        <div className="post-comment-item">
            <p className="post-comment-body">{comment.content}</p>
            <p className="post-comment-author">{comment.user?.username}</p>
        </div>
    );
}

export default PostCommentItem;