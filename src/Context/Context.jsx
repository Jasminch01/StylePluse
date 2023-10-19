import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const ContextPrider = createContext();

const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState('');

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
  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
    return () => {
      unSubsCribe();
    };
  }, []);
  
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
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
    setLoading,
    createUserEmailPass,
    updateUserProfile,
    signInEmailPass,
    user,
    logOut
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
