import { NavLink } from "react-router-dom";

function ExampleLinks({ examplesMouseLeaveHandler }) {

    return (
        <div className="links-containers example-links-container" onMouseLeave={examplesMouseLeaveHandler}>
            <NavLink to="/examples/blog" className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Blog Example</NavLink>

            <NavLink to="/examples/form" className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Form Example</NavLink>

            <NavLink to="/examples/admin" className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Admin Dashboard</NavLink>
        </div>
    );
}

export default ExampleLinks;
