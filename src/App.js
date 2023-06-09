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
import DrumMachine from "./components/drum/drum-machine";
import PomodoroClock from "./components/pomodoro/pomodoro-clock";
import BlogLayout from "./components/layouts/blog-layout";
import Blogs from "./components/blogs/blogs";
import BlogDetail from "./components/blogs/blog-detail";
import NewBlog from "./components/blogs/new-blog";
import EditBlog from "./components/blogs/edit-blog";
import AuthorDetail from "./components/blogs/author-detail";
import ExamplesIndex from "./components/examples/examples-index";
import FormExample from "./components/examples/form-example/form-example";
import Posts from "./components/posts/posts";
import PostDetail from "./components/posts/post-detail";
import NewPost from "./components/posts/new-post";
import EditPost from "./components/posts/edit-post";

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
    path: "/posts",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: "/posts/:id",
        element: <PostDetail />
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />
      },
      {
        path: "/posts/new",
        element: <NewPost />
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
      },
      {
        path: "/projects/drum-machine",
        element: <DrumMachine />
      },
      {
        path: "/projects/pomodoro-clock",
        element: <PomodoroClock />
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
    children: [
      {
        index: true,
        element: <ExamplesIndex />
      },
      {
        path: "/examples/form",
        element: <FormExample />
      }
    ]
  },
  {
    path: "/blogs",
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Blogs />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />
      },
      {
        path: "/blogs/new",
        element: <NewBlog />
      },
      {
        path: "/blogs/:id/edit",
        element: <EditBlog />
      },
      {
        path: "/blogs/:id/author-detail",
        element: <AuthorDetail />
      }
    ]
  }
]);

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("practice-token");

    if (token && !userCtx.user) {
      console.log('app user check');
      
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
        console.log('app user check data:', data);
        userCtx.loginUser(data);
      })
      .catch(error => console.log('app user check error:', error));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
