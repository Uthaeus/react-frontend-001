import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";

import { UserContext } from "../../store/user-context";
import ProjectLinks from "./project-links";
import ExampleLinks from "./example-links";
import NavUserItem from "./user-item";

function MainNavigation() {
  const userCtx = useContext(UserContext);
  const [showTable, setShowTable] = useState(false);


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
        element.classList.add('container-slide-in');
        setShowTable(true);
    }

    function projectsMouseLeaveHandler() {
        let element = document.querySelector('.project-links-container');

        setTimeout(() => {
            element.classList.remove('container-slide-in');
            setShowTable(false);
        }, 400);
    }

    function challengesHoverHandler() {}

    function examplesHoverHandler() {
        let element = document.querySelector('.example-links-container');
        element.classList.add('container-slide-in');
        setShowTable(true);
    }

    function examplesMouseLeaveHandler() {
        let element = document.querySelector('.example-links-container');

        setTimeout(() => {
            element.classList.remove('container-slide-in');
            setShowTable(false);
        }, 400);
    }

  return (
    <div className="main-navigation-container">
      <div className="main-navigation-header-wrapper">logo/header</div>

      <div className="main-navigation-links-wrapper">
        
          {userCtx.user ? <NavUserItem user={userCtx.user} /> : <p className="links-title">log in or register</p>}

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

        <ProjectLinks projectsMouseLeaveHandler={projectsMouseLeaveHandler} />

        <NavLink
            to="/projects"
            onMouseEnter={projectsHoverHandler}
            
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

        <ExampleLinks examplesMouseLeaveHandler={examplesMouseLeaveHandler} />

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
