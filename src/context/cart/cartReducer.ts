import { IUser } from "../../database/usuarios";
import { CartIState } from "./CartProvider";


type CartActionType =
    | { type: '[user] loggin', payload: IUser }
    | { type: '[user] logout'}

export const cartReducer = (state: CartIState, action: CartActionType): CartIState => {
    switch (action.type) {
        
        default:
            return state;
    }
}