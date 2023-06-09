import { FC, useReducer } from "react"
import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";
import { IUser, usuario } from "../../database/usuarios";

export interface UserIState{
    isLoggedIn: boolean,
    id: string,
    name: string;
    users: IUser[];
}

const USER_INITIAL_STATE: UserIState = {
    isLoggedIn: false,
    id: '',
    name: '',
    users: usuario
} 


export const UserProvider: FC<{children: React.ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
    const handleLogin = (user: IUser) => (dispatch({type: '[user] loggin', payload: user }))
    const handleLogout = () => (dispatch({type: '[user] logout'}))
    return (
        <UserContext.Provider
          value={{
            ...state,
    
            //Methods
            handleLogin,
            handleLogout
          }}
        >
          {children}
        </UserContext.Provider>
      );
}