import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export const Register = () => {
    const [nombre, setNombre] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({userName, password, email, nombre})
        // Realizar acciones con los datos del formulario, como enviarlos a un servidor

        // Restablecer los campos del formulario
        setNombre('');
        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                fullWidth
            />
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
            <TextField
                label="Correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Registrarse
            </Button>
        </form>
    );
};