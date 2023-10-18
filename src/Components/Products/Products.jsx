import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ brand }) => {
  const {_id, name, discription, photo } = brand;
  return (
    <div className=" bg-slate-100 p-5 flex justify-center">
      <div>
        <div className="text-center">
          <div className="flex justify-center">
            <img src={photo} alt="" className="lg:w-[300px] lg:h-[300px]" />
          </div>
          <p className="text-xl font-semibold">{name}</p>
          <p>{discription}</p>
          <div className="flex justify-center my-3">
            <div className="flex text-center text-white gap-5">
              <div>
                <button className="p-3 bg-teal-400">Update</button>
              </div>
              <div>
                <Link to={`/details/${_id}`}>
                  <button className="p-3 bg-teal-400">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  brand: PropTypes.object.isRequired,
};
export default Products;
