import { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { usuario } from '../database/usuarios';
import { UserContext } from '../context/user/UserContext';
import { UIContext } from '../context/ui/UIContext';

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {handleLogin} = useContext(UserContext);
    const { handleCloseLogin} = useContext(UIContext)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({userName, password})
        // Realizar acciones con los datos del formulario, como enviarlos a un servidor
        const user = usuario.filter( user => user.usuario === userName );
        // console.log(user[0])
        if(user.length > 0){
            handleLogin(user[0] || {});
            handleCloseLogin();
            
        }else{
            // no existe
        }

        // Restablecer los campos del formulario
        setUserName('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Usuario"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                fullWidth
            />
            <TextField
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </form>
    );
};