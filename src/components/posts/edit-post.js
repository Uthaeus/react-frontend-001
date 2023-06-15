import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";


import PostForm from "./post-form";

function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

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

            {post && <PostForm post={post} />}

            <Link to="/posts">Back to Posts</Link>
        </div>
    );
}

export default EditPost;