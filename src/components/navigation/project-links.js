import { NavLink } from "react-router-dom";

function ProjectLinks() {
    return (
        <div className="project-links-container">
            <NavLink
                to="/projects/calculator"
                className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
                }
            >
                Calculator
            </NavLink>
        </div>
    );
}

export default ProjectLinks;