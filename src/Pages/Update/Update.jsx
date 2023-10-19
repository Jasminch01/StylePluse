
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Update = () => {

  const [reset , setReset] = useState('')

    const upateProduct = useLoaderData({});

    const addProductHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const discription = form.discription.value;
        const rating = form.rating.value;

        const product = {
            name , 
            brand,
            type,
            price,
            photo, 
            discription,
            rating,
        }
        console.log(product)
        fetch(`http://localhost:5000/products/${upateProduct._id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
            if (data. modifiedCount > 0) {
                Swal.fire("", "Product Updated Successfully.", "success");
                setReset(true)
                form.reset()
            }
        })
    }

  return (

    <div className="mx-auto w-[80%]">
      <div>
        <div className="hero min-h-screen">
          <div>
            <div className="my-10">
              <p className="text-3xl text-bold text-center">
                Add Your Products
              </p>
            </div>
            <div className=" w-full pb-4">
              <form onSubmit={addProductHandler} className="">
                <div className="fom-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue={!reset ? upateProduct.name : 'name' }
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand Name"
                    defaultValue={!reset ?upateProduct.brand : ' Brand Name'}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    defaultValue={!reset ? upateProduct.type : 'Type'}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    defaultValue={!reset ? upateProduct.price : 'Price'}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    defaultValue={!reset? upateProduct.rating : 'Rating'}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo Url"
                    defaultValue={!reset ? upateProduct.photo : 'Photo Url'}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Discription</span>
                  </label>
                  <textarea
                    rows='10'
                    type="text"
                    name="discription"
                    defaultValue={! reset ? upateProduct.discription : 'description'}
                    placeholder="Short Discription"
                    className="border rounded-lg p-3"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="p-3 bg-teal-500 text-white ">Update </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
