
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Update = () => {

    const upateProduct = useLoaderData({});
//   const { name, price, discription, photo, type, brand, rating } = upateProduct;


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
        fetch('http://localhost:5000/products', {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId ) {
                Swal.fire("", "Product Updated Successfully.", "success");
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
                    defaultValue={upateProduct.name}
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
                    defaultValue={upateProduct.brand}
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
                    defaultValue={upateProduct.type}
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
                    defaultValue={upateProduct.price}
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
                    defaultValue={upateProduct.rating}
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
                    defaultValue={upateProduct.photo}
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
                    defaultValue={upateProduct.discription}
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
