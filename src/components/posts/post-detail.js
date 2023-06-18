import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import PostCommentItem from "./post-comment/post-comment-item";
import PostCommentForm from "./post-comment/post-comment-form";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const userCtx = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('post detail data:', data);
            setPost(data);
            setComments(data.post_comments);
        })
        .catch(error => console.log('post detail error:', error));
    }, [id]);

    function newCommentHandler(comment) {
        setComments(prevComments => [...prevComments, comment]);
    }

    return (
        <div className="post-detail-container">
            {post && (
                <>
                    <div className="post-detail-content">
                        <Link className="back-to-posts-link" to="/posts">{'<< back to posts'}</Link>

                        
                        <img src={`http://localhost:4000${post.image?.url}`} alt={post.title} className="post-detail-image" />
                        <p className="post-detail-body">{post.body}</p>

                        <div className="post-detail-actions">
                            {userCtx.user?.id === post.user_id && (
                                <>
                                    <Link className="edit-post-link" to={`/posts/${post.id}/edit`}>Edit Post</Link>
                                    <p className="delete-post-link">Delete Post</p>
                                </>        
                            )}
                            <Link className="back-to-posts-link" to="/posts">Back to Posts</Link>
                        </div>
                    </div>

                    <div className="post-comment-container">
                        {userCtx.user && <PostCommentForm user={userCtx.user} postId={post.id} newCommentHandler={newCommentHandler} />}

                        <h2 className="post-comment-title">Comments:</h2>

                        {comments?.map(comment => (
                            <PostCommentItem key={comment.id} comment={comment} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default PostDetail;