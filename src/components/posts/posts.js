import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import PostItem from "./post-item";
import AuthorItem from "./author-item";

function Posts() {
    const userCtx = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('posts data:', data);
            setPosts(data);
        })
        .catch(error => console.log('posts error:', error));
    }, []);

    function setAuthorHandler(author) {
        setAuthor(author);
    }

    return (
        <div className="posts-container">
            

            <div className="posts-body">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} setAuthorHandler={setAuthorHandler} />
                ))}
            </div>

            <div className="posts-header">
                <h1 className="posts-title">Posts</h1>
                {userCtx.user && <Link to='/posts/new' className="new-post-link">Create New Post</Link>}
                {author && <button className="clear-author-button" onClick={() => setAuthorHandler(null)}>Clear Author</button>}

                {author && <AuthorItem author={author} />}
            </div>
        </div>
    );
}

export default Posts;