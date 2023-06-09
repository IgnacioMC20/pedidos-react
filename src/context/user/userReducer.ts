import { IUser } from "../../database/usuarios";
import { UserIState } from "./UserProvider";


type UIActionType =
    | { type: '[user] loggin', payload: IUser }
    | { type: '[user] logout'}

export const userReducer = (state: UserIState, action: UIActionType): UserIState => {
    switch (action.type) {
        case '[user] loggin':
            return {
                ...state,
                isLoggedIn: true,
                id: action.payload.id,
                name: action.payload.name
            };
        case '[user] logout':
            return {
                ...state,
                isLoggedIn: false,
                id: '',
                name: ''
            };
        default:
            return state;
    }
}