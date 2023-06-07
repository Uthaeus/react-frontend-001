
function FeaturedBlogItem({ blog }) {

    function truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    return (
        <div className="featured-blog-item">
            <h2 className="featured-blog-item__title">{blog.title}</h2>
            <p className="featured-blog-item__description">{truncate(blog.description)}</p>
        </div>
    );
}

export default FeaturedBlogItem;