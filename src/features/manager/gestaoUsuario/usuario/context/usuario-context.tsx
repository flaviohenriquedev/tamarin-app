// contexts/UserContext.tsx
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface User {
    id: string;
    nome: string;
    email: string;
    // outros campos
}

const UsuarioContext = createContext<User | null>(null);

export function useUsuario() {
    return useContext(UsuarioContext);
}

export function UsuarioProvider({children}: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // async function fetchUser() {
        //     const res = await fetch("/api/auth/user"); // ou outro endpoint que tu tiver
        //     if (res.ok) {
        //         const data = await res.json();
        //         setUser(data);
        //     }
        // }
        //
        // fetchUser();
        console.log('TESTANDO')
        setUser({id: '1', nome: 'Flavio', email: 'teste@teste'})
    }, []);

    if (!user) return <div>Carregando dados do usuário...</div>;

    return (
        <UsuarioContext.Provider value={user}>
            {children}
        </UsuarioContext.Provider>
    );
}
