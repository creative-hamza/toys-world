import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import MyTOys from "../pages/toys/MyTOys";
import AllToys from "../pages/toys/AllToys";
import Addtoy from "../pages/toys/Addtoy";
import ErrorPage from "../shared/components/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../shared/components/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/all",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my",
        element: (
          <PrivateRoutes>
            <MyTOys></MyTOys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoutes>
            <Addtoy></Addtoy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/all/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-server-umber.vercel.app/singletoy/${params.id}`),
      },
      
    ],
  },
]);

export default router;
