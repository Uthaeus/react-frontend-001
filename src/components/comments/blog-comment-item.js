
function BlogCommentItem({comment}) {

    return (
        <div className="blog-comment-item-container">
            <p className="blog-comment-item-text">{comment.content}</p>
            <p className="blog-comment-item-poster">posted by: <span className="blog-comment-item-user">{comment.user?.username}</span></p>
        </div>
    );
}

export default BlogCommentItem;