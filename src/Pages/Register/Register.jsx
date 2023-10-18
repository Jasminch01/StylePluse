import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMiniEyeSlash, HiMiniEye } from "react-icons/hi2";
import { ContextPrider } from "../../Context/Context";

const Register = () => {
  const { createUserEmailPass, updateUserProfile } =
    useContext(ContextPrider);
  const [isShow, setIsShow] = useState("");
  const [createError, setCreateError] = useState(" ");
  const [success, setSuccess] = useState(" ");

  const location = useLocation();
  const navigate = useNavigate();

  const createUserHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photo");

    console.log(email, password, name, photoURL);

    setCreateError(" ");
    setSuccess(" ");
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/.test(
        password
      )
    ) {
      return setCreateError("please set strong password");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      return setCreateError("please provide a valid email address");
    }

    createUserEmailPass(email, password)
      .then((res) => {
        const createdUser = res.user;
        setSuccess("account created succesfully");

        updateUserProfile(createdUser, name, photoURL).then(() => {
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        setCreateError(error.message.slice(22, 42));
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div>
          <div className="my-10">
            <p className="text-3xl text-bold text-center">
              Register Your Account
            </p>
          </div>
          <div className="w-full shadow-2xl lg:w-96">
            <form onSubmit={createUserHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setIsShow(!isShow)}
                  className="absolute right-3 top-14"
                >
                  {!isShow ? (
                    <HiMiniEye></HiMiniEye>
                  ) : (
                    <HiMiniEyeSlash></HiMiniEyeSlash>
                  )}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p className="mt-10 text-sm text-center">
                  Already have an account?
                  <Link to="/login" className="text-blue-400">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="mt-10">
            {createError && (
              <p className="text-sm text-red-400 text-center">{createError}</p>
            )}
            {success && (
              <p className="text-sm text-green-500 text-center">{success}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
