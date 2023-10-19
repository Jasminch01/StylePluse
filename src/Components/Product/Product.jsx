import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, photo, price, rating } = product;

  return (
    <div>
      <div>
        <div className="space-y-3 ">
          <div className="flex justify-center relative">
            <img
              src={photo}
              alt=""
              className="w-[300px] h-[300px]"
            />
            <div className="text-center text-white gap-5 absolute bottom-0 ">
              <div>
                <Link to={`/details/${_id}`}>
                  <button className="p-3 bg-teal-400 rounded-full">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="pl-8">
            <p>{name}</p>
            <p>rating : {rating}</p>
            <p>Price : ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
