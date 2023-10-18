import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Addproduct from "../Pages/Home/AddProduct/Addproduct";
import Login from "../Pages/Home/Login/Login";
import MyCart from "../Pages/Home/MyCart/MyCart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/addproduct',
            element : <Addproduct></Addproduct>
        },
        {
            path : '/log in',
            element : <Login></Login>
        },
        {
            path : '/mycart',
            element : <MyCart></MyCart>
        }
    ]
  },
]);

export default Router;
