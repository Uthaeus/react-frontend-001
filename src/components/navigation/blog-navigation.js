import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function BlogNavigation() {
    const { user } = useContext(UserContext);

    function logoutHandler() {
        console.log("logoutHandler");
    }

    return (
        <div className="blog-navigation-container">
            <div className="blog-nav-logo-wrapper">
                logo stuff
            </div>

            <div className="blog-nav-links-wrapper">
                <NavLink to='/' end className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Home</NavLink>

                <NavLink to='/about' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>About</NavLink>

                <NavLink to='/blogs' className={({ isActive}) => isActive ? 'blog-link blog-link-active' : 'blog-link'}>Blogs</NavLink>

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