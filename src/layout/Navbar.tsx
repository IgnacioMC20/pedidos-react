import { AppBar, Badge, Button, Toolbar, Tooltip, Typography } from "@mui/material"
import FloatingModal from "../components/ModalLogin"
import { useContext } from "react"
import { UIContext } from "../context/ui/UIContext"
import { UserContext } from "../context/user/UserContext"
import { CartContext } from "../context/cart/CartContext"
import { PedidosI } from "../database/pedidos"

export const Navbar = () => {
    const { handleOpenLogin, handleOpenRegister } = useContext(UIContext)
    const { isLoggedIn, name, handleLogout } = useContext(UserContext)
    const { items, handleEnviarPedido, total, pedidos } = useContext(CartContext)

    const handlePrepararPedido = () => {
        // Obtener la fecha actual
        const fechaActual = new Date();

        // Función para formatear la fecha en formato "DD/MM/YYYY"
        const formatDate = (date: Date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            return `${day}/${month}/${year}`;
        };

        // Establecer la fecha de entrega como la fecha actual formateada
        const fechaEntrega = formatDate(fechaActual);

        // Calcular la fecha de recolección sumando 5 días a la fecha actual y formatearla
        const fechaRecoleccion = formatDate(new Date(fechaActual.getTime() + 5 * 24 * 60 * 60 * 1000));
        const ultimoPedido = pedidos[pedidos.length - 1];
        const pedidoIdLast = parseInt(ultimoPedido.id, 10);
        const pedidoxD: PedidosI = {
            id: (pedidoIdLast + 1).toString(),
            nombreQuienEnvia: name,
            tipo: 'individual',
            descripcion: 'descripcion ' + name,
            fechaEntrega,
            fechaRecoleccion,
            items,
            costo: total,
        }

        handleEnviarPedido(pedidoxD)
    }
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Sistema de Pedidos IGN</Typography>
                    {
                        !isLoggedIn ? (
                            <>
                                <Button onClick={handleOpenLogin} sx={{ color: 'white' }}>
                                    Login
                                </Button>
                                <Button onClick={handleOpenRegister} sx={{ color: 'white' }}>
                                    Registrarse
                                </Button>
                            </>
                        )
                            : (
                                <>
                                    <Typography color={'white'}>{name}</Typography>
                                    <Button onClick={handleLogout} sx={{ color: 'white' }}>
                                        Cerrar Sesion
                                    </Button>
                                </>
                            )
                    }
                    <Badge badgeContent={items}>
                        <Typography color={'white'}>
                            Carrito
                        </Typography>
                    </Badge>
                    <Tooltip title="Debes estar loggeado para enviar el pedido">
                        <span>
                            <Button onClick={handlePrepararPedido} disabled={!isLoggedIn} variant="contained">
                                <Typography color={'white'}>
                                    Enviar Pedido
                                </Typography>
                            </Button>
                        </span>
                    </Tooltip>
                </Toolbar>
                <FloatingModal />
            </AppBar>
        </nav>
    )
}
