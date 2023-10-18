import {useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const product = useLoaderData({});
  const { name, price, discription, photo, type, brand, rating } = product;

  const addCartHandler = ()=> {
    const product = {name, price, discription, photo, type, rating};
    console.log(product)
    fetch('http://localhost:5000/cart', {
        method : 'POST',
        headers : {
            'content-type' : 'application/json',

        },
        body : JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
        if (data.insertedId) {
            Swal.fire('', "added to card Successfully", 'success')
        }
    })
  }
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
          <p>Rating : {rating}</p>
          <p>Price : ${price}</p>
          <p>Info : {discription}</p>
          <button onClick={addCartHandler} className="p-3 bg-teal-500 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
