import { Card, CardContent, Typography, Button } from '@mui/material';
import { ProductosI } from '../database/productos'

export const Products = ({ title, type, gender, description, inStock, price, tags }: ProductosI) => {
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
                <Button>
                    <Typography>
                        Agregar +
                    </Typography>
                </Button>
            </CardContent>
        </Card>
    )
}
