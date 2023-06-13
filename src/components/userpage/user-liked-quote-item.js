
function UserLikedQuoteItem({ quote }) {

    return (
        <div className="user-liked-quote-item">
            <h3 className="quote-item-title">{quote.quote}</h3>
            <p className="quote-item-author">{quote.author}</p>
            <p className="quote-item-date">liked on {quote.created_at.split('T')[0]}</p>
        </div>
    );
}

export default UserLikedQuoteItem;