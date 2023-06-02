import { useState, useEffect, useContext } from "react";

import { colorSchemes } from "./color-schemes";
import { UserContext } from "../../store/user-context";

function QuoteMachine() {
    const [quote, setQuote] = useState("");
    const [quotes, setQuotes] = useState([]);
    const [author, setAuthor] = useState("");
    const [colors, setColors] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        // fetch quotes
    }, []);

    function generateQuoteHandler() {
        //let randomIndex = Math.floor(Math.random() * quotes.length);
        //let randomQuote = quotes[randomIndex];
        let randomColorIndex = Math.ceil(Math.random() * 5);

        //setQuote(randomQuote.quote);
        //setAuthor(randomQuote.author);
        setColors(colorSchemes[randomColorIndex]);
        console.log(randomColorIndex);
    }

    function tweetQuote() {

        let tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
        window.open(tweetUrl, "_blank");
    }

    function likeQuote() {
        if (!user) {
            // show notice
            return;
        }
        console.log('liking quote:');

        fetch('http://localhost:4000/liked_quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
            body: JSON.stringify({liked_quote: {quote, author, user_id: user.id}})
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .then(data => {
            console.log('liked quote response data:', data);
        })
        .catch(error => console.log('liked quote error:', error));
    }

    return (
        <div className="quote-machine-container">
            <h1 className="quote-machine-title">Quote Machine</h1>

            <div className="quote-machine" style={{background: colors.background}}>
                <div className="quote-machine__quote" style={{color: colors.quoteColor}}>
                    quote
                </div>
                <div className="quote-machine__author" style={{color: colors.authorColor}}>
                    author
                </div>
            </div>

            <div className="quote-machine-actions">
                <button onClick={generateQuoteHandler} className="quote-machine-btn generate-btn">
                    Generate Quote
                </button>

                <button onClick={tweetQuote} className="quote-machine-btn tweet-btn">
                    <i className="bi bi-twitter"></i>
                </button>

                <button onClick={likeQuote} className="quote-machine-btn like-btn">
                    <i className="bi bi-heart-fill"></i>
                </button>
            </div>
        </div>
    );
}

export default QuoteMachine;