import { Link } from "react-router-dom";

function FeaturedBlogItem({ blog }) {

    function truncate(str) {
        return str?.length > 70 ? str.substring(0, 70) + "..." : str;
    }

    return (
        <div className="featured-blog-item">
            <Link to={`/blogs/${blog?.id}`} className="featured-blog-item__title">{blog?.title}</Link>
            <p className="featured-blog-item__description">{truncate(blog?.body)}</p>
        </div>
    );
}

export default FeaturedBlogItem;