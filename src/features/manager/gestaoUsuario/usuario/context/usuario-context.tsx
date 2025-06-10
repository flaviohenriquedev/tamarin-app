import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import {EmpresaService} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa-service";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {useDadosSistemas} from "@/features/sistema/useDadosSistemas";

type Props = {
    usuarioLogado: Usuario;
    empresasUsuarioLogado: Empresa[];
    sistemasEnumUsuarioLogado: SistemaENUM[];
    modulosEnumUsuarioLogado: ModuloENUM[];
}

const usuarioService = new UsuarioService();
const empresaService = new EmpresaService();

const UsuarioContext = createContext<Props>({
    usuarioLogado: new Usuario(),
    empresasUsuarioLogado: [],
    sistemasEnumUsuarioLogado: [],
    modulosEnumUsuarioLogado: [],
});

export function useUsuarioLogado() {
    return useContext(UsuarioContext);
}

export function UsuarioProvider({children}: { children: ReactNode }) {

    const dadosSistemas = useDadosSistemas();


    const session = useSession();

    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>(new Usuario());

    const [empresasUsuarioLogado, setEmpresasUsuarioLogado] = useState<Empresa[]>([]);
    const [sistemasEnumUsuarioLogado, setSistemasEnumUsuarioLogado] = useState<SistemaENUM[]>([]);
    const [modulosEnumUsuarioLogado, setModulosEnumUsuarioLogado] = useState<ModuloENUM[]>([]);

    const getClientesUsuarioLogado = useCallback(async () => {
        if (usuarioLogado.usuarioMaster) {
            const response = await empresaService.listar();
            setEmpresasUsuarioLogado(response);
            setSistemasEnumUsuarioLogado(dadosSistemas.map(ds => ds.sistema));
            setModulosEnumUsuarioLogado(Object.values(ModuloENUM))
            return;
        }

    }, [dadosSistemas, usuarioLogado.usuarioMaster]);

    useEffect(() => {
        if (session.data?.user.email) {
            usuarioService.buscarUsuarioPorEmail(session.data?.user.email)
                .then(setUsuarioLogado)
                .catch(error => {
                    console.error("Erro ao buscar usuário:", error);
                });
        }
    }, [session.data?.user.email]);

    useEffect(() => {
        if (usuarioLogado.id) {
            getClientesUsuarioLogado().then();
        }
    }, [getClientesUsuarioLogado, usuarioLogado.id]);

    return (
        <UsuarioContext.Provider value={{
            usuarioLogado,
            empresasUsuarioLogado,
            sistemasEnumUsuarioLogado,
            modulosEnumUsuarioLogado
        }}>
            {children}
        </UsuarioContext.Provider>
    );
}
