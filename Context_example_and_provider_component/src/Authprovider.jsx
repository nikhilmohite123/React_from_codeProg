import { createContext, useContext,useState } from "react";

export const authContext = createContext();

function Authprovider({ children }) {
    const [auth,setAuth]=useState({  })
  return (
    <authContext.Provider value={{auth,setAuth}}>
      {children}
    </authContext.Provider>
  );
}
export function useAuth() {
  return useContext(authContext);
}

export default Authprovider;
