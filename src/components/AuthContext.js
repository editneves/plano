import { createContext } from "react";

export const AuthContext = createContext({
    form:  {},
    setForm: () => {},
    token:{},
    setToken: () => {},
})


