import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function AuthorDetail() {
    const [author, setAuthor] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/user_detail/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`,
            },
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            setAuthor(data);
        })
        .catch(err => console.log('error fetching author', err));
    }, [id]);

    return (
        <div className="author-detail-container">
            <div className="author-detail-header">
                {author && <h1 className="author-detail-header-title">{author.username}</h1>}
            </div>

            <div className="author-detail-body">
                <div className="author-detail-info-wrapper">
                    <div className="author-detail-info">
                        <p className="author-detail-info-title">email</p>
                        <p className="author-detail-info-content">{author.email}</p>
                    </div>

                    <div className="author-detail-info">
                        <p className="author-detail-info-title">blogs</p>
                        <p className="author-detail-info-content">{author.blogs?.length}</p>
                    </div>

                    <div className="author-detail-info">
                        <p className="author-detail-info-title">comments</p>
                        <p className="author-detail-info-content">{author.comments?.length}</p>
                    </div>

                    <div className="author-detail-info">
                        <p className="author-detail-info-title">liked quotes</p>
                        <p className="author-detail-info-content">{author.liked_quotes?.length}</p>
                    </div>
                </div>
            </div>

            <Link to="/blogs" className="author-detail-back-link">Back to Blogs</Link>
        </div>
    );
}

export default AuthorDetail;