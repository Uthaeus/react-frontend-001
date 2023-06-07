

function BlogItem({ blog }) {
    function truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    return (
        <div className="blog-item">
            <h2 className="blog-item__title">{blog.title}</h2>
            <p className="blog-item__description">{truncate(blog.description)}</p>
        </div>
    );
}

export default BlogItem;