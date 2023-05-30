import { NavLink, Link } from "react-router-dom";

function MainNavigation() {

    function logoutHandler() {
        console.log('logoutHandler');
    }

    return (
        <div className="main-navigation-container">
            <div className="main-navigation-header-wrapper">
                logo/header
            </div>

            <div className="main-navigation-links-wrapper">
                <NavLink to="/" end className={({isActive}) => isActive ? 'main-nav-link link-active' : 'main-nav-link'}>Home</NavLink>
            </div>

            <div className="main-navigation-auth-wrapper">
                <NavLink to="/sign-in" className="main-nav-link">Login</NavLink>
                <NavLink to="/sign-up" className="main-nav-link">Register</NavLink>

                <Link onClick={logoutHandler} className="main-nav-link">Logout</Link>
            </div>
        </div>
    );
}

export default MainNavigation;