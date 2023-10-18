import {  NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-teal-500 text-white p-3"
              : "p-3"
          }
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/Addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-teal-500 text-white p-3"
              : "p-3"
          }
        >
          Add Product
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/MyCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-teal-500 text-white p-3"
              : "p-3"
          }
        >
          My Cart
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/Login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-teal-500 text-white p-3"
              : "p-3"
          }
        >
          Login
        </NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className="md:w-[80%] md:mx-auto">
      <div className="navbar p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <p className="md:text-3xl text-teal-500 font-bold">StylePluse</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown relative">
            <label
              tabIndex={0}
              className="flex flex-col justify-center items-center"
            >
              {/* <img
                src={
                  user
                    ? user.photoURL !== null
                      ? user.photoURL
                      : defaultProfile
                    : defaultProfile
                }
                alt=""
                className="w-9 rounded-full ring-2 ring-green-500 outline-offset-2"
              /> */}
              <span className="text-center">
                {/* {user?.displayName ? user.displayName.slice(0, 6) : " "} */}
              </span>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32 absolute right-0  md:-right-24"
            >
              <li className="cursor-pointer hover:bg-slate-300 p-3 md:hidden">
                {/* {user?.displayName ? user.displayName : "User"} */}
              </li>
              <li className="cursor-pointer hover:bg-slate-300 p-3">Profile</li>
              <li className="cursor-pointer hover:bg-slate-300 p-3">Setting</li>
              <li className="cursor-pointer hover:bg-slate-300 p-3 md:hidden ">
                {/* {!user ? (
                  <Link to="/login" className="cursor-pointer">
                    Log in
                  </Link>
                ) : (
                  <button onClick={logOutHandle} className="cursor-pointer">
                    Log out
                  </button>
                )} */}
              </li>
            </ul>
          </div>
          <div className="md:flex hidden">
            {/* {!user ? (
              <Link
                to="/login"
                className="p-2 bg-rose-500 text-white ms-3 cursor-pointer"
              >
                Log in
              </Link>
            ) : (
              <button className="p-2 bg-rose-500 text-white ms-3 cursor-pointer">
                Log out
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
