import { NavLink, Link } from "react-router-dom";

function MainNavigation() {

    return (
        <div>
            <div>
                logo/header
            </div>

            <div>
                <NavLink to="/" end className={({isActive}) => isActive ? 'main-nav-link link-active' : 'main-nav-link'}>Home</NavLink>
            </div>

            <div>
                auth links
            </div>
        </div>
    );
}

export default MainNavigation;