import { Link } from "react-router-dom";

import BlogForm from "./blog-form";
import BlogsSidebar from "./blogs-sidebar";

function NewBlog() {

    return (
        <div className="new-blog-container">
            <div className="new-blog-header">
                <h1 className="new-blog-header-title">New Blog</h1>
                <Link to="/blogs" className="new-blog-header-link">Back to Blogs</Link>
            </div>

            <div className="new-blog-body">
                <div className="new-blog-wrapper">
                    <BlogForm />
                </div>

                <div className="new-blog-sidebar-container">
                    <BlogsSidebar />
                </div>
            </div>
        </div>
    );
}

export default NewBlog;
