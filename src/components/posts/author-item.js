import { useState } from "react";

function AuthorItem({ author }) {
    const [postAuthor, setPostAuthor] = useState(null);   

    function collectUserDataHandler() {

        fetch(`http://localhost:4000/user_detail/${author.id}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('user detail data:', data);
            setPostAuthor(data);
        })
        .catch(error => console.log('user detail error:', error));
    }

    return (
        <div className="author-item">
            <h2 className="author-item-username">{author.username}</h2>
            <p className="author-item-email">{author.email}</p>
            <p className="author-item-created-at">{author.created_at.split('T')[0]}</p>

            {!postAuthor && <p onClick={collectUserDataHandler} className="author-item-more-link">see more</p>}

            {postAuthor && (
                <div className="post-author-detail-wrapper">
                    <p className="post-author-detail-item">
                        comments: {postAuthor.comments.length}
                    </p>
                    <p className="post-author-detail-item">
                        posts: {postAuthor.posts.length}
                    </p>
                    <p className="post-author-detail-item">
                        likes: {postAuthor.liked_quotes.length}
                    </p>
                    <p className="post-author-detail-item">
                        blogs: {postAuthor.blogs.length}
                    </p>

                    <button className="post-author-detail-close-button" onClick={() => setPostAuthor(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default AuthorItem;