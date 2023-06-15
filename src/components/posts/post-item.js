

function PostItem({ post }) {

    return (
        <div className="post-item">
            <div className="post-item-header">
                <img src={`http://localhost:4000${post.image?.url}`} alt={post.title} width='100%' />
            </div>

            <div className="post-item-body">
                <p className="post-item-body-text">{post.body}</p>
            </div>
        </div>
    );
}

export default PostItem;    