import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";

import RootLayout from "./components/layouts/root-layout";
import ErrorPage from "./components/error/error-page";
import HomePage from "./pages/homepage";
import SignIn from "./components/auth/sign_in";
import SignUp from "./components/auth/sign_up";
import { UserContext } from "./store/user-context";
import AboutPage from "./pages/about";
import Calculator from "./components/calculator/calculator";
import UserPage from "./pages/user-page";
import MarkdownPreviewer from "./components/markdown/markdown";
import QuoteMachine from "./components/quote/quote-machine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/user-page",
        element: <UserPage />
      }
    ]
  },
  {
    path: "/projects",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects/calculator",
        element: <Calculator />
      },
      {
        path: "/projects/markdown-previewer",
        element: <MarkdownPreviewer />
      },
      {
        path: "/projects/quote-machine",
        element: <QuoteMachine />
      }
    ]
  },
  {
    path: "/challenges",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [

    ]
  },
  {
    path: "/examples",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: []
  }
]);

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("practice-token");

    if (token && !userCtx.user) {
      fetch("http://localhost:4000/user_check", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        userCtx.loginUser(data);
      })
      .catch(error => console.log('app user check error:', error));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
