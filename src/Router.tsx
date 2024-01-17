import { createHashRouter } from "react-router-dom";
import { paths } from "./config/paths";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Category from "./components/Category";
import DisplaySinglebook from "./components/Partials/DisplaySinglebook";

export const router =createHashRouter([
    {
        path: paths.home,
        element: <Layout />,
        
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
        //   {
        //     path: paths.contact,
        //     element: <Contact />,
        //   },
        ],
      },
])