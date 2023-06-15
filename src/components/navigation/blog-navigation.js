import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";
import BlogUserItem from "./blog-user-item";

function BlogNavigation() {
    const { user, logoutUser } = useContext(UserContext);

    function logoutHandler() {
        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            }
        })
        .then(response => {
            if (response.ok) {
                localStorage.removeItem('token');
                logoutUser();
            }
        })
        .catch(error => console.log('blog logout handler', error));
    }

    return (
        <div className="blog-navigation-container">
            <div className="blog-nav-logo-wrapper">
                {user ? <BlogUserItem user={user} /> : <h3 className="blog-nav-logo-title">Boop</h3>}
            </div>

            <div className="blog-nav-links-wrapper">
                <NavLink to='/' end className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Home</NavLink>

                <NavLink to='/about' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>About</NavLink>

                <NavLink to='/blogs' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Blogs</NavLink>

                <NavLink to='/posts' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Posts</NavLink>

                <NavLink to='/projects' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Projects</NavLink>

                <NavLink to='/challenges' end className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Challenges</NavLink>

                <NavLink to='/examples' end className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Examples</NavLink>
            </div>

            <div className="blog-nav-auth-links-wrapper">
                {user ? (
                    <Link onClick={logoutHandler} className="blog-link">Logout</Link>
                ) : (
                    <>
                        <NavLink to='/sign-in' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Login</NavLink>

                        <NavLink to='/sign-up' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Register</NavLink>
                    </>
                )}
            </div>
        </div>
    );
}

export default BlogNavigation;