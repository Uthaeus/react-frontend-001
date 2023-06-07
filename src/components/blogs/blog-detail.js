import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import BlogsSidebar from "./blogs-sidebar";
import { UserContext } from "../../store/user-context";

function BlogDetail() {
    const [blog, setBlog] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('blog data', data)
            setBlog(data);
        })
        .catch(err => console.log('error fetching blog', err));

        setIsLoading(false);
    }, [id]);

    if (isLoading) {
        return (
            <div className="loading-container">
                <p className="loading-text">Loading...</p>
            </div>
        );
    }

    return (
        <div className="blog-detail-container">
            <div className="blog-detail-content-wrapper">
                <h1 className="blog-detail-title">{blog.title}</h1>

                <div className="blog-detail-widgets-wrapper">
                    widgets
                </div>

                <div className="blog-detail-body-wrapper">
                    <p className="blog-detail-body">{blog.body}</p>
                </div>

                <div className="blog-detail-actions-wrapper">
                    <Link to="/blogs" className="blog-detail-actions-link detail-back">Back to Blogs</Link>
                </div>
            </div>
            
            <div className="blog-detail-sidebar-wrapper">
                <BlogsSidebar />
            </div>
        </div>
    );
}

export default BlogDetail;