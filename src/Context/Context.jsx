import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const ContextPrider = createContext();

const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(null);

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUserEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (createdUser, name, photoURL) => {
    return updateProfile(createdUser, {
      displayName: name,
      photoURL: photoURL
        ? photoURL
        : "https://example.com/jane-q-user/profile.jpg",
    });
  };

  const authValue = {
    signInGoogle,
    loading,
    createUserEmailPass,
    updateUserProfile,
    signInEmailPass,
  };

  return (
    <ContextPrider.Provider value={authValue}>
      {children}
    </ContextPrider.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
