import { createHashRouter } from "react-router-dom";
import { paths } from "./config/paths";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Category from "./components/Category";
import DisplaySinglebook from "./components/Partials/DisplaySinglebook";
import ErrorPage from "./components/ErrorPage";
import AboutPage from "./components/AboutPage";

export const router =createHashRouter([
    {
        path: paths.home,
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: paths.home,
            element: <Home/>,
          },
          {
            path: paths.category,
            element: <Category />,
          },
          {
            path: paths.book,
            element: <DisplaySinglebook />,
          },
          {
            path: paths.about,
            element: <AboutPage />,
          },
        ],
      },
])