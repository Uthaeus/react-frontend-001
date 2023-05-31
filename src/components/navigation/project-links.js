import { NavLink } from "react-router-dom";

function ProjectLinks({ projectsMouseLeaveHandler }) {


    return (
        <div className="links-containers project-links-container" onMouseLeave={projectsMouseLeaveHandler}>
            <NavLink
                to="/projects/calculator"
                className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
                }
            >
                Calculator
            </NavLink>

            <NavLink
                to="/projects/quote-machine"
                className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
                }
            >
                Quote Machine
            </NavLink>

            <NavLink
                to="/projects/markdown-previewer"
                className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
                }
            >
                Markdown Previewer
            </NavLink>

            <NavLink
                to="/projects/drum-machine"
                className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
                }
            >
                Drum Machine
            </NavLink>

            <NavLink
                to="/projects/pomodoro-clock"
                className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
                }
            >
                Pomodoro Clock
            </NavLink>
        </div>
    );
}

export default ProjectLinks;
