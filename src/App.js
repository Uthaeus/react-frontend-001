import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";

import RootLayout from "./components/layouts/root-layout";
import ErrorPage from "./components/error/error-page";
import HomePage from "./pages/homepage";
import SignIn from "./components/auth/sign_in";
import SignUp from "./components/auth/sign_up";
import { UserContext } from "./store/user-context";

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
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
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
