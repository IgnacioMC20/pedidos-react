import { Card, CardContent, Typography, Button } from '@mui/material';
import { ProductosI } from '../database/productos'
import { CartContext } from '../context/cart/CartContext';
import { useContext } from 'react';

export const Products = (product: ProductosI) => {
    const { title, type, gender, description, inStock, price, tags } = product
    const {handleAddProduct} = useContext(CartContext)
    return (
        <Card>
            <CardContent>
                <Typography  variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {type} - {gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    In Stock: {inStock}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Tags: {tags.join(', ')}
                </Typography>
                <Button onClick={() => handleAddProduct(product)}>
                    <Typography>
                        Agregar +
                    </Typography>
                </Button>
            </CardContent>
        </Card>
    )
}
