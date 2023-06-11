import { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { UserContext } from '../context/user/UserContext';
import { IUser } from '../database/usuarios';
import { UIContext } from '../context/ui/UIContext';

export const Register = () => {
    const [nombre, setNombre] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const { handleRegister } = useContext(UserContext);
    const { handleCloseRegister } = useContext(UIContext);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({ userName, password, email, nombre })

        const newUser: IUser = {
            id: (Math.floor(Math.random() * (10000 - 3 + 1)) + 3).toString(),
            name: nombre,
            usuario: userName,
            password,
            email,
            role: 'client'
        }
        handleRegister(newUser)
        handleCloseRegister();

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