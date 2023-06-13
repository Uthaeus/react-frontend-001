
import UserBlogItem from "./user-blog-item";
import UserCommentItem from "./user-comment-item";
import UserLikedQuoteItem from "./user-liked-quote-item";

function UserDetailComponent({ type, data, closeHandler }) {

    return (
        <div className="user-detail-component-container user-detail-component-container-hide">

            <h3 className="user-detail-component-title">{type}</h3>

            {type === 'comments' && data?.map(comment => <UserCommentItem key={comment.id} comment={comment} />)}
            {type === 'blogs' && data?.map(blog => <UserBlogItem key={blog.id} blog={blog} />)}
            {type === 'likes' && data?.map(quote => <UserLikedQuoteItem key={quote.id} quote={quote} />)}
            <button className="user-detail-component-btn" onClick={closeHandler}>Close</button>
        </div>
    );
}

export default UserDetailComponent;