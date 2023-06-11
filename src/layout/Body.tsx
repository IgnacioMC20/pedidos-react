import { Box, Grid, Typography } from '@mui/material';
import { productos } from '../database/productos';
import { Products } from '../components/Products';
import { Pedidos } from '../components/Pedidos';
import { CartContext } from '../context/cart/CartContext';
import { useContext } from 'react';

export const Body = () => {

    const { pedidos } = useContext(CartContext);
    return (
        <main>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant='h3'>
                        Productos
                    </Typography>
                    <Box m={2} />
                    <Box sx={{ overflow: 'scroll', maxHeight: '57vh' }}>
                        {
                            productos.map((producto) => (
                                <Products key={producto.slug} {...producto} />
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h3'>
                        Pedidos
                    </Typography>
                    <Box m={2} />
                    {/* <Box sx={{ overflow: 'scroll', maxHeight: '57vh' }}> */}
                        {
                            pedidos.map((pedido) => (
                                <Pedidos key={pedido.id} {...pedido} />
                            ))
                        }
                    {/* </Box> */}
                </Grid>
            </Grid>
        </main>
    )
}
