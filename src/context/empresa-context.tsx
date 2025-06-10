import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import Cookies from "js-cookie";
import {EmpresaService} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa-service";
import {dadosSistemas, useDadosSistemas} from "@/features/sistema/useDadosSistemas";
import {SistemaType} from "@/features/sistema/types";

const empresaService = new EmpresaService();

type Props = {
    empresa: Empresa;
    setEmpresa: (value: Empresa) => void;
    sistemas: SistemaType[];
    removeCookieEmpresaId: () => void;
}

export const EmpresaContext = createContext<Props>({
    empresa: new Empresa(),
    setEmpresa: () => {},
    sistemas: [],
    removeCookieEmpresaId: () => {}
});

export function useEmpresa() {
    return useContext(EmpresaContext);
}

export function EmpresaContextProvider({ children }: { children: ReactNode }) {
    const dadosSistemas = useDadosSistemas();

    const [empresa, setEmpresa] = useState<Empresa>(new Empresa());
    const [sistemas, setSistemas] = useState<SistemaType[]>([]);

    useEffect(() => {
        if (empresa?.id) {
            Cookies.set('empresa_id', empresa.id, { path: '/' });
            const sistemasEmpresa = empresa.sistemas.map(es => es.keySistema)
            if (sistemasEmpresa && sistemasEmpresa.length > 0) {
                setSistemas(dadosSistemas.filter(ds => sistemasEmpresa.includes(ds.sistema)))
            }
        }
    }, [empresa]);

    useEffect(() => {
        const cookieEmpresaId = Cookies.get('empresa_id');
        if (cookieEmpresaId) {
            empresaService.buscarPorId(cookieEmpresaId).then(response => {
                if (response && response.id) {
                    setEmpresa(response);
                }
            })
        }
    }, []);

    function removeCookieEmpresaId() {
        Cookies.remove('empresa_id');
    }

    return (
        <EmpresaContext.Provider value={{
            empresa: empresa,
            setEmpresa: setEmpresa,
            sistemas,
            removeCookieEmpresaId
        }}>
            {children}
        </EmpresaContext.Provider>
    )
}