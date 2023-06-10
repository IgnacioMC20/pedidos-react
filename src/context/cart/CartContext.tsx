import { createContext } from "react";
import { ProductosI } from "../../database/productos";

interface ContextProps {
    products: ProductosI[];
    total: number;
    items: number;

    //Methods
}

export const CartContext = createContext({} as ContextProps);