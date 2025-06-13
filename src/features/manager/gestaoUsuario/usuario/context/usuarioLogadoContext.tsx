import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

type Props = {
    usuarioLogado: Usuario;
};

const UsuarioLogadoContext = createContext<Props>({
    usuarioLogado: new Usuario()
});

export function useUsuarioLogado() {
    return useContext(UsuarioLogadoContext);
}

const usuarioService = new UsuarioService();

export function UsuarioProvider({children}: { children: ReactNode }) {
    const session = useSession();

    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>(new Usuario());

    useEffect(() => {
        const email = session.data?.user.email;
        if (!email) return;

        usuarioService.buscarUsuarioPorEmail(email)
            .then(result => {
                setUsuarioLogado(result);
            })
            .catch(error => {
                console.error("Erro ao buscar usuário:", error);
            });
    }, [session.data?.user.email]);

    return (
        <UsuarioLogadoContext.Provider
            value={{
                usuarioLogado
            }}
        >
            {children}
        </UsuarioLogadoContext.Provider>
    );
}
