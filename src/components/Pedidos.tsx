import { PedidosI } from '../database/pedidos'
import { Button, Card, CardContent, Typography } from '@mui/material'

export const Pedidos = ({ id, tipo, nombreQuienEnvia, descripcion, fechaEntrega, fechaRecoleccion, items, costo }: PedidosI) => {
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
                <Button>
                    <Typography>
                        Editar
                    </Typography>
                </Button>
            </CardContent>
        </Card>
    )
}
