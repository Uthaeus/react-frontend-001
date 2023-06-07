import BlogsSidbar from "./blogs-sidebar";
import FeaturedBlogItem from "./featured-blog-item";
import BlogItem from "./blog-item";

function Blogs() {
    return (
        <div className="blogs-container">
            <div className="blogs-header">
                <h1 className="blogs-header-title">Example Blogs Page</h1>
                <div className="blogs-featured-wrapper">
                    <p className="blogs-featured-title">featured blog:</p>
                    <FeaturedBlogItem blog={{ title: 'blog title', description: 'blog description' }} />
                </div>
            </div>

            <div className="blogs-body">
                <div className="blogs-list-wrapper">
                    list
                </div>

                <div className="blogs-sidebar-container">
                    <BlogsSidbar />
                </div>
            </div>
        </div>
    );
}

export default Blogs;