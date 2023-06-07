import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import BlogsSidebar from './blogs-sidebar';
import BlogForm from './blog-form';

function EditBlog() {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
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
        <div className="edit-blog-container">
            <div className="edit-blog-header">
                <h1 className="edit-blog-header-title">Edit Blog</h1>
                <Link to="/blogs" className="edit-blog-header-link">Back to Blogs</Link>
            </div>

            <div className="edit-blog-body">
                <div className="edit-blog-wrapper">
                    <BlogForm blog={blog} />
                </div>

                <div className="edit-blog-sidebar-container">
                    <BlogsSidebar />
                </div>
            </div>
        </div>
    );
}

export default EditBlog;