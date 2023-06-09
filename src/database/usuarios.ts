export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    usuario: string
}
export const usuario: IUser[] = [
    {
        id: '123456',
        name: 'Ignacio Martinez',
        email: 'ign@ign.com',
        password: '123456',
        role: 'admin',
        usuario: 'ign'
    },
    {
        id: '65432',
        name: 'Adrian Martinez',
        email: 'adrian@adrian.com',
        password: '123456',
        role: 'client',
        usuario: 'adr'
    }
]