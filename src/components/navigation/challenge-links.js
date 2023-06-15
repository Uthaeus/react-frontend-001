import { NavLink } from "react-router-dom";

function ChallengeLinks({ challengesMouseLeaveHandler }) {

    return (
        <div className="links-containers challenge-links-container" onMouseLeave={challengesMouseLeaveHandler}>
            <NavLink to="/posts" className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Posts</NavLink>
        </div>
    );
}

export default ChallengeLinks;