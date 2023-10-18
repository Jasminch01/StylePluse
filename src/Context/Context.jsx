import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const ContextPrider = createContext()

const googleProvider =  new GoogleAuthProvider()

const Context = ({children}) => {
    const [loading, setLoading] = useState(null)

    const signInGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const authValue = {
        signInGoogle,
        loading,
    }

    
    return (
        <ContextPrider.Provider value={authValue}>
         {children}   
        </ContextPrider.Provider>
    );
};

Context.propTypes = {
    children : PropTypes.node.isRequired
}

export default Context;