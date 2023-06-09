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
        const [user] = usuario.filter( user => user.usuario === userName );
        if(user){
            if(user.password === password){
                handleLogin(user);
            }else{
                setPassword('');
                return alert('Usuario o Contraseña erroneos')
            }
            
            handleCloseLogin();
        }else{
            // no existe
            console.log('no existe')
            alert('Usuario o Contraseña erroneos')
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