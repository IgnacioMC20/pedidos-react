import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({userName, password})
        // Realizar acciones con los datos del formulario, como enviarlos a un servidor

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