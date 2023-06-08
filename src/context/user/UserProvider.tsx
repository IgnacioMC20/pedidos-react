import { FC, useReducer } from "react"
import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";

export interface UserIState{
    isLoggedIn: boolean,
    id: string
}

const USER_INITIAL_STATE: UserIState = {
    isLoggedIn: false,
    id: '',
} 

export const UserProvider: FC<{children: React.ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
    return (
        <UserContext.Provider
          value={{
            ...state,
    
            //Methods
          }}
        >
          {children}
        </UserContext.Provider>
      );
}