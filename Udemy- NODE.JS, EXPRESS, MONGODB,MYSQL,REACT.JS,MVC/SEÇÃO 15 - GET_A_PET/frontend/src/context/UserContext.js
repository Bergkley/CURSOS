import { createContext } from "react";

import UserAuth from "../hooks/userAuth";

const Context = createContext();

function UserProvider({ children }) {
    const { authenticated,register} = UserAuth();

    return <Context.Provider value={{authenticated,register}}>{children}</Context.Provider>;
}

export {Context, UserProvider}