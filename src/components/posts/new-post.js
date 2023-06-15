import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

import PostForm from "./post-form";

function NewPost() {
    const userCtx = useContext(UserContext);

    return (
        <div className="new-post-container">
            <div className="new-post-form-wrapper">
                <PostForm user={userCtx.user} />
            </div>

            <div className="new-post-header">
                <h1 className="new-post-title">New Post</h1>
                <Link to="/posts" className="new-post-link">Back to Posts</Link>
            </div>
        </div>
    );
}

export default NewPost;