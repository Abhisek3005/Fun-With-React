import React from "react";
import Usercontext from "./Usercontext";

const Usercontextprovider = ({children}) => {
    const [user, setUser ] = React.useState (null)
    return (
        <Usercontext.Provider value ={ {user, setUser}} >
          {children}
        </Usercontext.Provider>
     )
}

export default Usercontextprovider