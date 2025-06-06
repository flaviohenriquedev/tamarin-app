import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {useSession} from "next-auth/react";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {ClienteService} from "@/features/manager/gestaoCliente/cliente/ts/cliente-service";

type Props = {
    usuarioLogado: Usuario;
    clientesUsuarioLogado: Cliente[];
    listaSistemasPermitidos: SistemaENUM[];
    listaModulosPermitidos: string[];
}

const UsuarioContext = createContext<Props>({
    usuarioLogado: new Usuario(),
    clientesUsuarioLogado: [],
    listaSistemasPermitidos: [],
    listaModulosPermitidos: []
});

const usuarioService = new UsuarioService();
const clienteService = new ClienteService();

export function useUsuarioLogado() {
    return useContext(UsuarioContext);
}

export function UsuarioProvider({children}: { children: ReactNode }) {
    const session = useSession();
    const [loading, setLoading] = useState(true);
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>(new Usuario());
    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);
    const [listaSistemasPermitidos, setListaSistemasPermitidos] = useState<SistemaENUM[]>([]);
    const [listaModulosPermitidos, setListaModulosPermitidos] = useState<string[]>([]);

    useEffect(() => {
        if (session.data?.user.email) {
            usuarioService.buscarUsuarioPorEmail(session.data?.user.email)
                .then(response => {
                    setUsuarioLogado(response);
                    getListaCliente(response);
                    getListaSistemasPermitidos(response);
                    getListaModulosPermitidos(response);
                    setLoading(false);
                });
        }
    }, [session.data?.user.email]);

    const getListaCliente = (usuario: Usuario) => {

        if (usuario.usuarioMaster) {
            clienteService.listar().then(result => setListaClientes(result));
            return;
        }

        if (usuario.perfis && usuario.perfis.length > 0) {
            const clientes: Cliente[] = usuario.perfis.map(
                lp => lp.perfil.cliente
            )
            setListaClientes(clientes);
        }
    }

    function getListaSistemasPermitidos(response: Usuario) {
        if (response.usuarioMaster) {
            return setListaSistemasPermitidos(Object.values(SistemaENUM))
        }
        return setListaSistemasPermitidos(response.perfis.flatMap(p => p.perfil.sistemas.map(s => s.clienteSistema.keySistema)))
    }

    function getListaModulosPermitidos(response: Usuario) {
        const listaPerfilSistema: PerfilSistema[] = response.perfis.flatMap(p => p.perfil.sistemas)
        setListaModulosPermitidos(listaPerfilSistema.flatMap(ps => ps.rotas.map(r => r.modulo)))
    }

    return (
        <UsuarioContext.Provider value={{
            usuarioLogado, clientesUsuarioLogado: listaClientes, listaSistemasPermitidos, listaModulosPermitidos
        }}>
            {children}
        </UsuarioContext.Provider>
    );
}
