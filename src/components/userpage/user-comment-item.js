
function UserCommentItem({ comment }) {

    return (
        <div className="user-comment-item-wrapper">
            <div className="user-comment-item-content">
                {comment.content}
            </div>

            <div className="user-comment-item-info">
                <p>posted {comment.created_at.split('T')[0]}</p>
            </div>
        </div>
    );
}

export default UserCommentItem;