import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

function PostItem({ post, setAuthorHandler, user }) {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        let postLike = user.post_likes.find(postLike => postLike.post_id === post.id);

        if (postLike) {
            setLiked(true);
        }
    }, [liked, post.id, user]);

    function truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + '...' : str;
    }

    function postLikeHandler() {
        if (liked || !user) return; 
        
        let dataToSend = {
            post_like: {
                user_id: user.id,
                post_id: post.id
            }
        };

        fetch('http://localhost:4000/post_likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
            body: JSON.stringify(dataToSend)
        })
        .then(res => {
            if (res.ok) {
                setLiked(true);
                return res.json();
            }
        })
        .catch(error => console.log('post like error:', error));    
    }

    function postUnlikeHandler() {
        let postLike = user.post_likes.find(postLike => postLike.post_id === post.id);

        fetch(`http://localhost:4000/post_likes/${postLike.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            }
        })
        .then(res => {
            if (res.ok) {
                setLiked(false);
                return res.json();
            }
        })
        .catch(error => console.log('post unlike error:', error));
    }

    return (
        <div className="post-item">
            <div className="post-item-header">
                <img src={`http://localhost:4000${post.image?.url}`} alt={post.title} width='90%' />
                
            </div>

            <div className="post-item-body">
                <p className="post-item-body-text">{truncate(post.body)}</p>

                <div className="post-item-body-footer">
                    <p className="post-item-body-by">by: <span onClick={() => setAuthorHandler(post.user)} className="post-item-body-username">{post.user.username}</span></p>

                    {!liked && <i onClick={postLikeHandler} className="bi bi-heart post-like-btn"></i>}
                    {liked && <i onClick={postUnlikeHandler} className="bi bi-heart-fill post-like-btn"></i>}
                </div>
            </div>

            <button onClick={() => navigate(`/posts/${post.id}`)} className='post-item-btn'>{'>'}</button>
        </div>
    );
}

export default PostItem;    