import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {useSession} from "next-auth/react";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {ClienteService} from "@/features/manager/gestaoCliente/cliente/ts/cliente-service";

type Props = {
    usuarioLogado: Usuario;
    clientesUsuarioLogado: Cliente[];
}

const UsuarioContext = createContext<Props>({
    usuarioLogado: new Usuario(),
    clientesUsuarioLogado: []
});

const usuarioService = new UsuarioService();
const clienteService = new ClienteService();

export function useUsuarioLogado() {
    return useContext(UsuarioContext);
}

export function UsuarioProvider({children}: { children: ReactNode }) {
    const session = useSession();
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>(new Usuario());
    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        if (session.data?.user.email) {
            usuarioService.buscarUsuarioPorEmail(session.data?.user.email)
                .then(response => {
                    setUsuarioLogado(response);
                    getListaCliente(response);
                })
        }

    }, [session.data?.user.email, session.data?.user.name])

    const getListaCliente = (usuario: Usuario) => {
        if (usuario.perfis && usuario.perfis.length > 0) {
            const clientes: Cliente[] = usuario.perfis.map(
                lp => lp.perfil.cliente
            )
            setListaClientes(clientes);
        }
    }

    if (!usuarioLogado) return <div>Carregando dados do usuário...</div>;

    return (
        <UsuarioContext.Provider value={{
            usuarioLogado, clientesUsuarioLogado: listaClientes
        }}>
            {children}
        </UsuarioContext.Provider>
    );
}
