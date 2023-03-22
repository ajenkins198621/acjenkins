import { createContext, useReducer } from "react"
import reducer, { initialState } from "./reducer";
import { Action } from "./reducer";

export const SiteContext = createContext();

export const SiteProvider = ({ children } : {
    children: React.ReactNode
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const value = {
        state,
        dispatch,
    };
  
    return (
      <SiteContext.Provider value={value}>
        {children}
      </SiteContext.Provider>
    );
  };
  