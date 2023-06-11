import { FC, useReducer } from "react"
import { ProductosI, productos } from '../../database/productos';
import { cartReducer } from "./cartReducer";
import { CartContext } from "./CartContext";
import { PedidosI, pedidos } from '../../database/pedidos';

export interface CartIState {
    products: ProductosI[];
    total: number;
    items: number;
    pedidos: PedidosI[]
}

const [product] = productos

const CART_INITIAL_STATE: CartIState = {
    products: [product],
    items: 1,
    total: 75,
    pedidos
}

export const CartProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    const handleAddProduct = (producto: ProductosI) => (dispatch({type: '[cart] add', payload: producto}))
    const handleEnviarPedido = (pedido: PedidosI) => (dispatch({type: '[cart] enviar pedido', payload: pedido}))
    const handleRemovePedido = (id: string) => (dispatch({type: '[cart] borrar pedido', payload: id}))

    return (
        <CartContext.Provider
            value={{
                ...state,

                //Methods
                handleAddProduct,
                handleEnviarPedido,
                handleRemovePedido
            }}
        >
            {children}
        </CartContext.Provider>
    );
}