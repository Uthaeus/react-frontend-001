import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";
import ProjectLinks from "./project-links";

function MainNavigation() {
  const userCtx = useContext(UserContext);

  function logoutHandler() {
    console.log("logoutHandler");

    fetch("http://localhost:4000/users/sign_out", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("practice-token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("practice-token");
          userCtx.logoutUser();
        }
      })
      .catch((error) => console.log("logout error", error));
  }

    function projectsHoverHandler() {
        let element = document.querySelector('.project-links-container');
        element.classList.toggle('container-slide-in');
    }

    function projectsMouseLeaveHandler() {
        let element = document.querySelector('.project-links-container');
        setTimeout(() => {
            element.classList.toggle('container-slide-in');
        }, 500);
    }

    function challengesHoverHandler() {}

    function examplesHoverHandler() {}

  return (
    <div className="main-navigation-container">
      <div className="main-navigation-header-wrapper">logo/header</div>

      <div className="main-navigation-links-wrapper">
        <p className="links-title">
          {userCtx.user ? `Hi, ${userCtx.user.username}` : "log in or register"}
        </p>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "main-nav-link link-active" : "main-nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "main-nav-link link-active" : "main-nav-link"
          }
        >
          About
        </NavLink>

        <ProjectLinks />

        <NavLink
            to="/projects"
            onMouseEnter={projectsHoverHandler}
            onMouseLeave={projectsMouseLeaveHandler}
          className={({ isActive }) =>
            isActive ? "main-nav-link link-active" : "main-nav-link"
          }
        >
          Projects 
        </NavLink>

        <NavLink
            to="/challenges"
            onMouseEnter={challengesHoverHandler}
          className={({ isActive }) =>
            isActive ? "main-nav-link link-active" : "main-nav-link"
          }
        >
          Challenges
        </NavLink>

        <NavLink
            to="/examples"
            onMouseEnter={examplesHoverHandler}
          className={({ isActive }) =>
            isActive ? "main-nav-link link-active" : "main-nav-link"
          }
        >
          Examples
        </NavLink>
      </div>

      <div className="main-navigation-auth-wrapper">
        {userCtx.user ? (
          <Link onClick={logoutHandler} className="main-nav-link">
            Logout
          </Link>
        ) : (
          <>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                isActive ? "main-nav-link link-active" : "main-nav-link"
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default MainNavigation;
