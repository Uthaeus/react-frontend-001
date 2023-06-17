import { useEffect, useState, useContext } from "react";
import { useParams, Link} from "react-router-dom";

import { UserContext } from "../../store/user-context";

import PostForm from "./post-form";

function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('edit post data:', data);
            setPost(data);
        })
        .catch(error => console.log('post error:', error));
    }, [id]);

    return (
        <div className="edit-post-container">
            <h1 className="edit-post-title">Edit Post</h1>

            {post && <PostForm post={post} user={user} />}

            <div className="edit-post-actions">
                <Link className="edit-post-action back-link" to="/posts">Back to Posts</Link>
                <Link className="edit-post-action post-link" to={`/posts/${id}`}>View Post</Link>
                <Link className="edit-post-action delete-link" to={`/posts/${id}/delete`}>Delete Post</Link>
            </div>
        </div>
    );
}

export default EditPost;