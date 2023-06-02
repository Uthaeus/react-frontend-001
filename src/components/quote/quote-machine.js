import { useState, useEffect, useContext } from "react";

import { colorSchemes } from "./color-schemes";
import { UserContext } from "../../store/user-context";

const initialQuote = {
  id: 1,
  quote: "The best way to predict the future is to create it.",
  author: "Abraham Lincoln",
  user_id: 1,
};

function QuoteMachine() {
  const [quote, setQuote] = useState(initialQuote);
  const [quotes, setQuotes] = useState([]);
  const [colors, setColors] = useState([]);
  const { user, likedQuotes, addQuoteToLiked, removeQuoteFromLiked } =
    useContext(UserContext);

  let alreadyLiked = likedQuotes.find(
    (liked_quote) => liked_quote.quote === quote.quote
  );

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
  }

  function tweetQuote() {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
    window.open(tweetUrl, "_blank");
  }

  function likeQuoteHandler() {
    if (!user) {
      // show notice
      console.log("not logged in, cannot like quote");
      return;
    }
    if (alreadyLiked) {
      // show notice
      console.log("already liked quote");
      return;
    }
    console.log("liking quote:");

    fetch("http://localhost:4000/liked_quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("practice-token")}`,
      },
      body: JSON.stringify({
        liked_quote: {
          quote: quote.quote,
          author: quote.author,
          user_id: user.id,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        addQuoteToLiked(data);
        console.log("liked quote response data:", data);
      })
      .catch((error) => console.log("liked quote error:", error));
  }

  function unlikeQuoteHandler() {
    fetch(`http://localhost:4000/liked_quotes/${quote.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("practice-token")}`,
      },
    })
    .then((response) => {
      if (response.ok) {
        removeQuoteFromLiked(quote.id);
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => {
        console.log("unliked quote response data:", data);
    })
    .catch((error) => console.log("unliked quote error:", error));
  }

  return (
    <div className="quote-machine-container">
      <h1 className="quote-machine-title">Quote Machine</h1>

      <div className="quote-machine" style={{ background: colors.background }}>
        <div
          className="quote-machine__quote"
          style={{ color: colors.quoteColor }}
        >
          {quote.quote}
        </div>
        <div
          className="quote-machine__author"
          style={{ color: colors.authorColor }}
        >
          {quote.author}
        </div>
      </div>

      <div className="quote-machine-actions">
        <button
          onClick={generateQuoteHandler}
          className="quote-machine-btn generate-btn"
        >
          Generate Quote
        </button>

        <button onClick={tweetQuote} className="quote-machine-btn tweet-btn">
          <i className="bi bi-twitter"></i>
        </button>

        {alreadyLiked ? (
          <button
            onClick={unlikeQuoteHandler}
            className="quote-machine-btn liked-btn"
          >
            <i className="bi bi-heart-fill"></i>
          </button>
        ) : (
          <button
            onClick={likeQuoteHandler}
            className="quote-machine-btn like-btn"
          >
            <i className="bi bi-heart"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default QuoteMachine;
