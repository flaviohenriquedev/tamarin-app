import {createContext, ReactNode, useContext, useState} from "react";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import Cookies from "js-cookie";
import {EmpresaService} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa-service";

const empresaService = new EmpresaService();

type Props = {
    empresa: Empresa;
    selecionarEmpresa: (value: Empresa) => void;
    removeCookieEmpresaId: () => void;
}

export const EmpresaContext = createContext<Props>({
    empresa: new Empresa(),
    selecionarEmpresa: () => {},
    removeCookieEmpresaId: () => {}
});

export function useEmpresa() {
    return useContext(EmpresaContext);
}

export function EmpresaContextProvider({ children }: { children: ReactNode }) {

    const [empresa, setEmpresa] = useState<Empresa>(new Empresa());

    function removeCookieEmpresaId() {
        Cookies.remove('empresa_id');
        localStorage.removeItem('empresaId');
    }

    function selecionarEmpresa(emp: Empresa) {
        localStorage.setItem('empresaId', emp.id);
        Cookies.set('empresa_id', emp.id, { path: '/' });
        setEmpresa(emp);
    }

    return (
        <EmpresaContext.Provider value={{
            empresa,
            selecionarEmpresa,
            removeCookieEmpresaId
        }}>
            {children}
        </EmpresaContext.Provider>
    )
}