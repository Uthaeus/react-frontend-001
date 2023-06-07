import { Link } from "react-router-dom";

function BlogItem({ blog, user }) {
    function truncate(str) {
        return str.length > 200 ? str.substring(0, 200) + "..." : str;
    }

    return (
         <div className="blog-item">
            <h2 className="blog-item__title">{blog.title}</h2>

            <div className="blog-item-widgets">
                <div className="widgets-left">
                    <Link to={`/blogs/${blog.id}`} className="blog-item-widgets-visit">Visit</Link>
                    <p className="blog-item-widgets-author">by <span className="widgets-username">{blog.user?.username}</span></p>
                    <p className="blog-item-widgets-date">{blog.created_at.split('T')[0]}</p>
                </div> 

                <div className="widgets-right">
                    {user && user.id === blog.user_id && (
                        <>
                            <Link to={`/blogs/${blog.id}/edit`} className="blog-item-widgets-edit">Edit</Link>

                            <p className="blog-item-widgets-delete">del</p>
                        </>
                        
                    )}
                </div>
            </div>

            <p className="blog-item__description">{truncate(blog.body)}</p>
        </div>
    );
}

export default BlogItem;