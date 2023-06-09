import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import BlogsSidebar from "./blogs-sidebar";
import FeaturedBlogItem from "./featured-blog-item";
import BlogItem from "./blog-item";
import { UserContext } from "../../store/user-context";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]); 
    const [category, setCategory] = useState('All');
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
            setBlogs(data);
            setFilteredBlogs(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setFeaturedBlog(data[randomIndex]);
        })
        .catch(err => console.log('error fetching blogs', err));

        setIsLoading(false);
    }, []);

    function filterHandler(category) {
        setCategory(category);
        if (category === 'All') {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(blogs.filter(blog => blog.category.title === category));
        }
    }

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
                    {filteredBlogs.map(blog => <BlogItem key={blog.id} blog={blog} user={user} />)}
                </div>

                <div className="blogs-sidebar-container">
                    <BlogsSidebar filterHandler={filterHandler} />
                </div>
            </div>
        </div>
    );
}

export default Blogs;