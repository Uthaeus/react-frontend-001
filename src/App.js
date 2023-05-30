import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import ErrorPage from "./components/error/error-page";
import HomePage from "./pages/homepage";
import SignIn from "./components/auth/sign_in";
import SignUp from "./components/auth/sign_up";

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
  return <RouterProvider router={router} />;
}

export default App;
