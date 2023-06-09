import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import FloatingModal from "../components/ModalLogin"
import { useContext } from "react"
import { UIContext } from "../context/ui/UIContext"
import { UserContext } from "../context/user/UserContext"

export const Navbar = () => {
    const { handleOpenLogin, handleOpenRegister } = useContext(UIContext)
    const { isLoggedIn, name, handleLogout } = useContext(UserContext)
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Mi Barra de Navegación</Typography>
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
                </Toolbar>
                <FloatingModal />
            </AppBar>
        </nav>
    )
}
