import { useLoaderData } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { ContextPrider } from "../../../Context/Context";

const MyCart = () => {
  const {setLoading} = useContext(ContextPrider);
  setLoading(false)

  const productCarts = useLoaderData();

  const [productsCarts, setProductsCart] = useState(productCarts);

  const deleteCartProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaingCartProducts = productsCarts.filter(
                (product) => product._id !== id
              );
              setProductsCart(remaingCartProducts);
            }
          });
      }
    });
  };
  return (
    <div className="mx-auto w-[80%] h-screen my-20">
      {productsCarts.length < 1 ? (
        <div>
          <div className="flex items-center justify-center h-screen">
            <p>No Cart Data found</p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {productsCarts.map((product) => (
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
                    <button
                      onClick={() => deleteCartProduct(product._id)}
                      className="p-3 bg-teal-400 text-white"
                    >
                      <BsFillCartDashFill className="text-xl"></BsFillCartDashFill>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
