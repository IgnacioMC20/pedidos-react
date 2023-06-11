//  id del pedido, nombre de quien envia
//el pedido, tipo de pedido, descripción, fecha de entrega, fecha de recolección,
// cantidad de artículos y costo

export interface PedidosI {
    id: string;
    nombreQuienEnvia: string;
    tipo: 'individual' | 'combo';
    descripcion: string;
    fechaEntrega: string;
    fechaRecoleccion: string;
    items: number;
    costo: number;
}

export const pedidos: PedidosI[] = [
    {
        id: '1',
        nombreQuienEnvia: 'Adrian',
        tipo: 'individual',
        descripcion: 'descripcion 1',
        fechaEntrega: '1/1/1',
        fechaRecoleccion: '1/2/1',
        items: 7,
        costo: 600,
    },
    {
        id: '2',
        nombreQuienEnvia: 'Adrian',
        tipo: 'individual',
        descripcion: 'descripcion 2',
        fechaEntrega: '1/1/1',
        fechaRecoleccion: '1/2/1',
        items: 6,
        costo: 500,
    },
]