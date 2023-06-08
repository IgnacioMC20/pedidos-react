import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import FloatingModal from "../components/ModalLogin"
import { useContext } from "react"
import { UIContext } from "../context/ui/UIContext"

export const Navbar = () => {
    const {handleOpenLogin, handleOpenRegister} = useContext(UIContext)
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Mi Barra de Navegación</Typography>
                </Toolbar>
                <Button onClick={handleOpenLogin}>
                    <Typography color={'white'}>
                        Login
                    </Typography>
                </Button>
                <Button onClick={handleOpenRegister}>
                    <Typography color={'white'}>
                        Registrarse
                    </Typography>
                </Button>
                <FloatingModal/>
            </AppBar>
        </nav>
    )
}
