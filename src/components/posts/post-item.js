import { useNavigate } from "react-router";

function PostItem({ post, setAuthorHandler }) {
    const navigate = useNavigate();

    function truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + '...' : str;
    }

    return (
        <div className="post-item">
            <div className="post-item-header">
                <img src={`http://localhost:4000${post.image?.url}`} alt={post.title} width='90%' />
                
            </div>

            <div className="post-item-body">
                <p className="post-item-body-text">{truncate(post.body)}</p>
                <p className="post-item-body-by">by: <span onClick={() => setAuthorHandler(post.user)} className="post-item-body-username">{post.user.username}</span></p>
            </div>

            <button onClick={() => navigate(`/posts/${post.id}`)} className='post-item-btn'>{'>'}</button>
        </div>
    );
}

export default PostItem;    