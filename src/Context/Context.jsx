import { createContext } from "react";
import PropTypes from 'prop-types';

export const ContextPrider = createContext()

const Context = ({children}) => {

    const authValue = {
        name : 'context'
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