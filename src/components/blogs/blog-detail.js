import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import BlogsSidebar from "./blogs-sidebar";
import { UserContext } from "../../store/user-context";
import BlogCommentForm from "../comments/blog-comment-form";
import BlogCommentItem from "../comments/blog-comment-item";

function BlogDetail() {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
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
            setBlog(data);
            setComments(data.comments);
        })
        .catch(err => console.log('error fetching blog', err));

        setIsLoading(false);
    }, [id]);

    function blogCommentSubmitHandler(data) {
        let newComment = {
            comment: {
                content: data.content,
                blog_id: blog.id,
                user_id: user.id
            }
        };

        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            setComments([data, ...comments]);
        })
        .catch(err => console.log('error creating comment', err));
    }

    if (isLoading) {
        return (
            <div className="loading-container">
                <p className="loading-text">Loading...</p>
            </div>
        );
    }

    console.log('blog', blog);

    return (
        <div className="blog-detail-container">
            <div className="blog-detail-content-wrapper">
                <h1 className="blog-detail-title">{blog.title}</h1>

                <div className="blog-detail-widgets-wrapper">
                    <div className="blog-detail-widgets-left">
                        <Link to={'/blogs'} className="blog-detail-widgets-item back-widget">Back</Link>
                        <Link to={`/blogs/${blog.user_id}/author-detail`} className="blog-detail-widgets-item author-widget">{blog.user?.username}</Link>
                    </div>

                    <div className="blog-detail-widgets-right">
                        <p className="blog-detail-widgets-item date-widget">posted: {blog.created_at?.split('T')[0]}</p>
                        <p className="blog-detail-widgets-item comments-widget">{blog.comments?.length} comments</p>

                        {user && user.id === blog.user_id && (
                            <>
                                <Link to={`/blogs/${blog.id}/edit`} className="blog-detail-widgets-item edit-widget">
                                    <i className="bi bi-pencil-square"></i>
                                </Link>

                                <Link to={`/blogs/${blog.id}/delete`} className="blog-detail-widgets-item delete-widget">
                                    <i className="bi bi-trash3"></i>
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                <div className="blog-detail-body-wrapper">
                    <p className="blog-detail-body">{blog.body}</p>
                </div>

                <div className="blog-detail-comments-wrapper">
                    <h2 className="blog-detail-comments-title">Comments</h2>

                    {user && <BlogCommentForm submitHandler={blogCommentSubmitHandler} />}

                    <div className="blog-detail-comments-list-wrapper">
                        {comments?.map(comment => <BlogCommentItem key={comment.id} comment={comment} />)}
                    </div>
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