import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";
import Rating from "react-rating";

const Details = () => {
  const product = useLoaderData({});
  const { name, price, discription, photo, type, brand, rating } = product;

  const addCartHandler = () => {
    const product = { name, price, discription, photo, type, rating };
    console.log(product);
    fetch("https://style-pulse-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("", "added to card Successfully", "success");
        }
      });
  };
  return (
    <div className="w-[80%] mx-auto flex justify-center h-screen">
      <div className="md:flex md:gap-5 items-center">
        <div>
          <img src={photo} alt="" className="w-[500px]" />
        </div>
        <div className="md:w-[500px] space-y-5">
          <p className="text-2xl font-semibold">{name}</p>
          <p>Brand : {brand}</p>
          <p>Type : {type}</p>
          <p>Price : ${price}</p>
          <p>
            {" "}
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={rating}
              readonly
            />
          </p>
          <p>Info : {discription}</p>
          <button
            onClick={addCartHandler}
            className="p-3 bg-teal-500 text-white flex items-center"
          >
            Add to Cart <FaCartPlus className="text-xl ml-4"></FaCartPlus>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
