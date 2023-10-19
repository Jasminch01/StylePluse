import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Addproduct from "../Pages/Home/AddProduct/Addproduct";
import Login from "../Pages/Home/Login/Login";
import MyCart from "../Pages/Home/MyCart/MyCart";
import Brand from "../Components/Brand/Brand";
import Products from "../Components/Products/Products";
import Details from "../Components/Details/Details";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Update from "../Pages/Update/Update";
import Error from "../Pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement :  <Error></Error> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch(`https://style-pulse-server.vercel.app/products`)
      },
      {
        path: "/addproduct",
        element: <PrivetRoute><Addproduct></Addproduct></PrivetRoute>,
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
        path: "/mycart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
        loader: () => fetch(`https://style-pulse-server.vercel.app/cart`),
      },
      {
        path: "/brands/:name",
        element: <Brand></Brand>,
        loader: ({ params }) =>
          fetch(`https://style-pulse-server.vercel.app/products/${params.name}`),
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/details/:id",
        element: <PrivetRoute>
        <Details></Details>
        </PrivetRoute>,
        loader: ({ params }) =>
          fetch(`https://style-pulse-server.vercel.app/product/${params.id}`),
      },
      {
        path : '/update/:id',
        element : <PrivetRoute> <Update> </Update> </PrivetRoute>,
        loader : ({params}) => fetch(`https://style-pulse-server.vercel.app/product/${params.id}`)

        
      }
    ],
  },
]);

export default Router;
