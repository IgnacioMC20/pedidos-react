import { createContext } from "react";
import { IUser } from "../../database/usuarios";

interface ContextProps {
    isLoggedIn: boolean;
    id: string;
    name: string;
    users: IUser[]

    //Methods
    handleLogin?: (user: IUser) => void
    handleLogout?: () => void
    handleRegister?: () => void
}

export const UserContext = createContext({} as ContextProps);