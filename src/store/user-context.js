import { createContext, useState } from "react";

export const UserContext = createContext({
    user: null,
    likedQuotes: [],
    loginUser: () => {},
    logoutUser: () => {},
    addQuoteToLiked: (quote) => {},
    removeQuoteFromLiked: (quote) => {},
});

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [likedQuotes, setLikedQuotes] = useState([]);

    function loginUser(user) {
        setUser(user);
        setLikedQuotes(user.liked_quotes);  
    }

    function logoutUser() {
        setUser(null);
    }

    function addQuoteToLiked(quote) {
        setLikedQuotes([...likedQuotes, quote]);
    }

    function removeQuoteFromLiked(id) {
        setLikedQuotes(likedQuotes.filter(liked_quote => liked_quote.id !== id));
    }

    const value = {
        user,
        likedQuotes,
        loginUser,
        logoutUser,
        addQuoteToLiked,
        removeQuoteFromLiked,
    };

    

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;