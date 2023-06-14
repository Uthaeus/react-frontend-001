import { createContext, useState } from "react";

export const UserContext = createContext({
    user: null,
    likedQuotes: [],
    blogs: [],
    comments: [],
    loginUser: () => {},
    logoutUser: () => {},
    addQuoteToLiked: (quote) => {},
    removeQuoteFromLiked: (quote) => {},
    addBlog: (blog) => {},
    removeBlog: (id) => {},
    addComment: (comment) => {},
    removeComment: (id) => {},
});

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [likedQuotes, setLikedQuotes] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);

    function addBlog(blog) {
        setBlogs([...blogs, blog]);
    }

    function removeBlog(id) {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }

    function addComment(comment) {
        setComments([...comments, comment]);
    }

    function removeComment(id) {
        setComments(comments.filter(comment => comment.id !== id));
    }

    function loginUser(user) {
        setUser(user);
        setLikedQuotes(user.liked_quotes);  
        setBlogs(user.blogs);
        setComments(user.comments);
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
        blogs,
        comments,
        loginUser,
        logoutUser,
        addQuoteToLiked,
        removeQuoteFromLiked,
        addBlog,
        removeBlog,
        addComment,
        removeComment,
    };

    

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;