
function BlogCommentItem({comment}) {

    return (
        <div className="blog-comment-item-container">
            <p>{comment.content}</p>
            <p>posted by: {comment.user?.username}</p>
        </div>
    );
}

export default BlogCommentItem;