import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Ping } from "@uiball/loaders";
import { ContextPrider } from "../Context/Context";


const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(ContextPrider);
  const location = useLocation();
  if (loading) {
     return <div className="h-screen text-center flex justify-center items-center">

     <Ping
      size={40}
      speed={0.9} 
      color="black" 
     />
     </div>
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
