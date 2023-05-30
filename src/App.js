import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import ErrorPage from "./components/error/error-page";
import HomePage from "./pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
