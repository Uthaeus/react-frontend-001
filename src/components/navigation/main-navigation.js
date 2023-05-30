import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
    const userCtx = useContext(UserContext);

    function logoutHandler() {
        console.log('logoutHandler');

        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            }
        })
        .then(response => {
            if (response.ok) {
                localStorage.removeItem('practice-token');
                userCtx.logout();
            }
        })
        .catch(error => console.log('logout error', error));
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