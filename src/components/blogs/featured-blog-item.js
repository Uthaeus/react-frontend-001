
function FeaturedBlogItem({ blog }) {

    function truncate(str) {
        return str?.length > 70 ? str.substring(0, 70) + "..." : str;
    }

    return (
        <div className="featured-blog-item">
            <h2 className="featured-blog-item__title">{blog?.title}</h2>
            <p className="featured-blog-item__description">{truncate(blog?.body)}</p>
        </div>
    );
}

export default FeaturedBlogItem;