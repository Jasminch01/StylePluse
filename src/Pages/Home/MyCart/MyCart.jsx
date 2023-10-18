import { Link, useLoaderData } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';
import { BsFillCartDashFill} from 'react-icons/bs';

const MyCart = () => {
  const productCarts = useLoaderData();
  return (
    <div className="mx-auto w-[80%]">
      <div className="grid md:grid-cols-2 gap-5">
        {productCarts.map((product) => (
          <div key={product._id}>
            <div className="flex justify-around items-center bg-slate-100">
              <div>
                <img src={product.photo} alt="" className="w-32" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-semibold">{product.name}</p>
                  <p>Type : {product.type}</p>
                  <p>Rating : {product.rating}</p>
                  <p>Price : ${product.price}</p>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <button className="p-3 bg-teal-400 text-white">
                    <BsFillCartDashFill className="text-xl"></BsFillCartDashFill>
                  </button>
                </div>
                <div>
                  <Link to = ''>
                    <button className="p-3 bg-teal-400 text-white">
                      <AiFillEye className="text-xl"></AiFillEye>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
