import { PedidosI } from "../../database/pedidos";
import { ProductosI } from "../../database/productos";
import { CartIState } from "./CartProvider";


type CartActionType =
    | { type: '[cart] add', payload: ProductosI }
    | { type: '[cart] enviar pedido', payload: PedidosI }
    | { type: '[cart] borrar pedido', payload: string }

export const cartReducer = (state: CartIState, action: CartActionType): CartIState => {
    switch (action.type) {
        case '[cart] add':
            const updatedProducts = [...state.products, action.payload];
            const updatedTotal = updatedProducts.reduce((acumulador, product) => acumulador + product.price, 0);

            return {
                ...state,
                products: updatedProducts,
                items: updatedProducts.length,
                total: updatedTotal
            }
        case '[cart] enviar pedido':
            return {
                ...state,
                pedidos: [...state.pedidos, action.payload],
                products: [],
                items: 0,
                total: 0
            }

        case '[cart] borrar pedido':
            return {
                ...state,
                pedidos: state.pedidos.filter( (pedido) => pedido.id !== action.payload)
            }
        default:
            return state;
    }
}