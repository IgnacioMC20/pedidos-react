interface Props {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}
export const usuario: Props[] = [
    {
        id: '123456',
        name: 'Ignacio Martinez',
        email: 'ign@ign.com',
        password: '123456',
        role: 'admin',
    },
    {
        id: '65432',
        name: 'Adrian Martinez',
        email: 'adrian@adrian.com',
        password: '123456',
        role: 'client',
    }
]