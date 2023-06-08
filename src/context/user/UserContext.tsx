import { createContext } from "react";

interface ContextProps {
    isLoggedIn: boolean;
    id: string;

    //Methods
    handleLogin?: () => void
    handleLogout?: () => void
    handleRegister?: () => void
}

export const UserContext = createContext({} as ContextProps);