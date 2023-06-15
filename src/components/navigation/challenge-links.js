import { NavLink } from "react-router-dom";

function ChallengeLinks() {

    return (
        <div className="links-containers challenge-links-container">
            <NavLink to="/posts" className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Posts</NavLink>
        </div>
    );
}

export default ChallengeLinks;