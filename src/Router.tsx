import { createHashRouter } from "react-router-dom";
import { paths } from "./config/paths";
import Home from "./components/Home";
import Layout from "./components/Layout";

export const router =createHashRouter([
    {
        path: paths.home,
        element: <Layout />,
        
        children: [
          {
            path: paths.home,
            element: <Home/>,
          },
        //   {
        //     path: paths.searchResults,
        //     element: <SearchResults />,
        //   },
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