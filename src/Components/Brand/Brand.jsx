import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";

const Brand = () => {
  const loadedBrand = useLoaderData();
  console.log(loadedBrand)
  return (
    <div className="w-[80%] mx-auto">
      <div>
        <Banner></Banner>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-20">
        {
            loadedBrand.map((brand, idx) => <Products key={idx} brand = {brand}></Products>)
        }
      </div>
    </div>
  );
};

export default Brand;
