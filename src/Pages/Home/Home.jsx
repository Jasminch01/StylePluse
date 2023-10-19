import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Product from "../../Components/Product/Product";


const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto gap-4 my-10">
                {
                    products.map(product => <Product key={product._id} product = {product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;