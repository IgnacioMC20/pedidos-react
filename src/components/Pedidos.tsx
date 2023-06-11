import { useContext } from 'react'
import { UserContext } from '../context/user/UserContext'
import { PedidosI } from '../database/pedidos'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { CartContext } from '../context/cart/CartContext'

export const Pedidos = ({ id, tipo, nombreQuienEnvia, descripcion, fechaEntrega, fechaRecoleccion, items, costo }: PedidosI) => {
    const { name } = useContext(UserContext)
    const { handleRemovePedido } = useContext(CartContext)

    return (
        <Card sx={{ margin: '5px 3px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Order #{id}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {tipo} - {nombreQuienEnvia}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Delivery Date: {fechaEntrega}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Pickup Date: {fechaRecoleccion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Items: {items}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cost: ${costo}
                </Typography>
                {
                    (name === nombreQuienEnvia) && (
                        <Button onClick={() => handleRemovePedido(id)}>
                            <Typography color={'red'}>
                                Borrar Pedido
                            </Typography>
                        </Button>
                    )
                }
            </CardContent>
        </Card>
    )
}
