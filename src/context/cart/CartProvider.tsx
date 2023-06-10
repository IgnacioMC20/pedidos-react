import { FC, useReducer } from "react"
import { ProductosI, productos } from "../../database/productos";
import { cartReducer } from "./cartReducer";
import { CartContext } from "./CartContext";

export interface CartIState {
    products: ProductosI[];
    total: number;
    items: number;
}

const [product] = productos

const CART_INITIAL_STATE: CartIState = {
    products: [product],
    total: 75,
    items: 1,
}


export const CartProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    return (
        <CartContext.Provider
            value={{
                ...state,

                //Methods
            }}
        >
            {children}
        </CartContext.Provider>
    );
}