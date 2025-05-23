import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {useSession} from "next-auth/react";

const UsuarioContext = createContext<Usuario>(new Usuario());
const usuarioService = new UsuarioService();

export function useUsuario() {
    return useContext(UsuarioContext);
}

export function UsuarioProvider({children}: { children: ReactNode }) {
    const session = useSession();
    const [usuario, setUsuario] = useState<Usuario>(new Usuario());

    useEffect(() => {
        if (session.data?.user.email) {
            usuarioService.getUsuario(session.data?.user.email).then(response => {
                setUsuario(response);
            })
        }

    }, [session.data?.user.email, session.data?.user.name])

    if (!usuario) return <div>Carregando dados do usuário...</div>;

    return (
        <UsuarioContext.Provider value={usuario}>
            {children}
        </UsuarioContext.Provider>
    );
}
