import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Product from "../../Components/Product/Product";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaShippingFast, FaRecycle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto gap-4 my-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="bg-slate-100 p-10">
        <p className="text-2xl font-semibold text-center">Our Features</p>
        <hr />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 w-[80%] mx-auto  gap-5 ">
          <div className="text-center p-5 shadow-xl bg-white">
            <div className="flex justify-center">
              <FaShippingFast className="text-5xl "></FaShippingFast>
            </div>
            <p className="font-semibold">FREE SHIPPING</p>
            <p>on order over $100</p>
          </div>
          <div className="text-center p-5 shadow-xl bg-white">
            <div className="flex justify-center">
              <MdOutlineSupportAgent className="text-5xl "></MdOutlineSupportAgent>
            </div>
            <p className="font-semibold">24/7 SUPPORT</p>
            <p>online consultations</p>
          </div>
          <div className="text-center p-5 shadow-xl bg-white">
            <div className="flex justify-center">
              <SlCalender className="text-4xl "></SlCalender>
            </div>
            <p className="font-semibold">DAILY UPDATES</p>
            <p>Check out store for latest</p>
          </div>
          <div className="text-center p-5 shadow-xl bg-white">
            <div className="flex justify-center">
              <FaRecycle className="text-4xl "></FaRecycle>
            </div>
            <p className="font-semibold">30-DAY RETURNS</p>
            <p>moneyback guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
