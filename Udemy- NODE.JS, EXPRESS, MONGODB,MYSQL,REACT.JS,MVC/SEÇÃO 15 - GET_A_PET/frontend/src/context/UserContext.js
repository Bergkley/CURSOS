import { createContext } from "react";

import UserAuth from "../hooks/userAuth";

const Context = createContext();

function UserProvider({ children }) {
    const { register} = UserAuth();

    return <Context.Provider value={{register}}>{children}</Context.Provider>;
}

export {Context, UserProvider}