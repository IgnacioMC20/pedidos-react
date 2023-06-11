import { createContext } from "react";
import { ProductosI } from "../../database/productos";
import { PedidosI } from '../../database/pedidos';

interface ContextProps {
    products: ProductosI[];
    total: number;
    items: number;
    pedidos: PedidosI[]

    //Methods
    handleAddProduct: (p: ProductosI) => void
    handleEnviarPedido: (p: PedidosI) => void
    handleRemovePedido: (id: string) => void
}

export const CartContext = createContext({} as ContextProps);