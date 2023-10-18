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
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/mycart',
            element : <MyCart></MyCart>,
            loader : () => fetch(`http://localhost:5000/cart`)
        },
        {
            path : '/brands/:name',
            element : <Brand></Brand>,
            loader : ({params}) => fetch(`http://localhost:5000/products/${params.name}`),
        },
        {
            path : '/products',
            element : <Products></Products>,

        },
        {
            path : '/details/:id',
            element : <Details></Details>,
            loader : ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        }
    ]
  },
]);

export default Router;
