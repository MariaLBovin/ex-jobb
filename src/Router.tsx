import { createHashRouter } from "react-router-dom";
import { paths } from "./config/paths";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Category from "./components/Category";

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
        //   {
        //     path: paths.ad,
        //     element: <Ad />,
        //   },
        //   {
        //     path: paths.contact,
        //     element: <Contact />,
        //   },
        ],
      },
])