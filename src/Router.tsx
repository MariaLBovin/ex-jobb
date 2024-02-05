import { createHashRouter } from "react-router-dom";
import { paths } from "./config/paths";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Category from "./components/Category";
import DisplaySinglebook from "./components/Partials/DisplaySinglebook";
import ErrorPage from "./components/ErrorPage";
import AboutPage from "./components/AboutPage";
import Login from "./components/Login";
import CreateUserForm from "./components/Partials/CreateUserForm";
import Profilepage from "./components/Profilepage";

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
            path: paths.bookById,
            element: <DisplaySinglebook />,
          },
          {
            path: paths.categoryBookById,
            element: <DisplaySinglebook />,
          },
          {
            path: paths.about,
            element: <AboutPage />,
          },
          {
            path: paths.login,
            element: <Login></Login>
        },
        {
          path: paths.create,
          element: <CreateUserForm></CreateUserForm>
        },
        {
          path: paths.profilepage,
          element: <Profilepage></Profilepage>
        }
        ],
      },
])