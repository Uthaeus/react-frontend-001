
function UserBlogItem({ blog }) {
    return (
        <div className="user-blog-item">
            <h3 className="blog-item-title">{blog.title}</h3>
            <p className="blog-item-body">{blog.body}</p>
            <p className="blog-item-created-at">{blog.created_at.split('T')[0]}</p>
        </div>
    );
}

export default UserBlogItem;