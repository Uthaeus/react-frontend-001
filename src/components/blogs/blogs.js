import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import BlogsSidebar from "./blogs-sidebar";
import FeaturedBlogItem from "./featured-blog-item";
import BlogItem from "./blog-item";
import { UserContext } from "../../store/user-context";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('blogs data', data)
            setBlogs(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setFeaturedBlog(data[randomIndex]);
        })
        .catch(err => console.log('error fetching blogs', err));

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <p className="loading-text">Loading...</p>
            </div>
        );
    }

    return (
        <div className="blogs-container">
            <div className="blogs-header">
                <div className="mx-3">
                    <h1 className="blogs-header-title">Example Blogs Page</h1>
                    {user && <Link to="/blogs/new" className="blogs-header-link">Create New Blog</Link>}
                </div>

                <div className="blogs-featured-wrapper">
                    <p className="blogs-featured-title">featured blog</p>
                    <FeaturedBlogItem blog={featuredBlog} />
                </div>
            </div>

            <div className="blogs-body">
                <div className="blogs-list-wrapper">
                    {blogs.map(blog => <BlogItem key={blog.id} blog={blog} user={user} />)}
                </div>

                <div className="blogs-sidebar-container">
                    <BlogsSidebar />
                </div>
            </div>
        </div>
    );
}

export default Blogs;