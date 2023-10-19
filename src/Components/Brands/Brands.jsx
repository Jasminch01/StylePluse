import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://style-pulse-server.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data.brands);
      });
  }, []);

  return (
    <div className="my-20">
      <p className="text-center text-3xl font-medium">Most Populer Brands</p>
      <div className="md:flex-row flex-col flex items-center justify-center gap-5">
        {brands.map((brand, idx) => (
          <div key={idx} className="hover:bg-slate-100 p-5">
            <Link to={`/brands/${brand.name}`} className="flex-col cursor-pointer">
              <div className="flex-grow">
                <img src={brand.img} alt="" className="w-20" />
              </div>
              {/* <div>
                <p className="text-center">{brand.name}</p>
              </div> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
