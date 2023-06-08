import { createContext } from "react";

interface ContextProps {
    isLoginOpen: boolean;
    isRegisterOpen: boolean;

    //Methods
    handleOpenLogin: () => void
    handleCloseLogin: () => void
    handleOpenRegister: () => void
    handleCloseRegister: () => void

}

export const UIContext = createContext({} as ContextProps);